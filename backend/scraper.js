const puppeteer = require('puppeteer');
const cron = require('node-cron');
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: "localhost",
	user: "consolestock",
	password: "cs4345",
	database: "consolestock"
});

const PS5 = new Map([
	["Amazon", "https://www.amazon.com/dp/B08FC5L3RG"],
	["BestBuy", "https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149"],
	["Newegg", ""]
]);

const PS5DE = new Map([
	["Amazon", "https://www.amazon.com/dp/B08FC6MR62"],
	["BestBuy", "https://www.bestbuy.com/site/sony-playstation-5-digital-edition-console/6430161.p?skuId=6430161"],
	["Newegg", "https://www.newegg.com/p/2SH-000D-002K1"]
]);

const XSX = new Map([
	["Amazon", "https://www.amazon.com/dp/B08G9J44ZN #platform_for_display_1"],
	["BestBuy", "https://www.bestbuy.com/site/microsoft-xbox-series-x-1tb-console-black/6428324.p?skuId=6428324"],
	["Newegg", "https://www.newegg.com/p/N82E16868105273"]
]);

const XSS = new Map([
	["Amazon", "https://www.amazon.com/dp/B08G9J44ZN #platform_for_display_0"],
	["BestBuy", "https://www.bestbuy.com/site/microsoft-xbox-series-s-512-gb-all-digital-console-disc-free-gaming-white/6430277.p?skuId=6430277"],
	["Newegg", "https://www.newegg.com/p/N82E16868105274"]
]);

const NS = new Map([
	["Amazon", "https://www.amazon.com/dp/B07VGRJDFY"],
	["BestBuy", "https://www.bestbuy.com/site/nintendo-switch-32gb-console-gray-joy-con/6364253.p?skuId=6364253"],
	["Newegg", "https://www.newegg.com/p/N82E16878190842"]
]);

const consoles = new Map([
	["PS5", PS5],
	["PS5DE", PS5DE],
	["Series X", XSX],
	["Series S", XSS],
	["Switch", NS]
])

const selectors = {
	Amazon: {
		title: "#productTitle",
		price: "#priceblock_ourprice",
		availability: "#outOfStock",
	},

	BestBuy: {
		title: ".sku-title",
		price: ".priceView-hero-price > span:nth-child(1)",
		availability: ".btn-disabled"
	},

	Newegg: {
		title: ".product-title",
		price: ".product-price > ul:nth-child(1) > li:nth-child(3)",
		availability: ".flags-red"
	}
}

class ConsoleListing {
    constructor(id, brand, type, condition, seller, url, active, date, price) {
        this.id = id;
        this.brand = brand;
        this.type = type;
        this.condition = condition;
        this.seller = seller;
        this.url = url;
        this.active = active;
        this.date = date;
        this.price = price;
    }
}

const listingScraper = {
	async init(){
		if(!this.page){
			this.browser = await puppeteer.launch();
			let pages = await this.browser.pages();
			this.page = pages[0];
			await this.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
		}
	},

	async scrapeListing(system, marketplace, uri){
		this.system = system;
		this.marketplace = marketplace;
		if(!uri){
			uri = consoles.get(system).get(marketplace);
		}
		await this.loadPage(uri);
		
		let listing = {
			id: undefined,
			title: await this.getTitle(),
			type: system,
			condition: "New",
			seller: marketplace,
			url: uri.split(' ')[0],
			active: await this.getAvailability(),
			date: this.generateTimestamp(),
			price: await this.getPrice(),
		};
		return listing;
	},

	async loadPage(uri){
		const url = uri.split(' ')[0];
		const selectors = uri.split(' ').splice(1);
		await this.page.goto(url);
		for (let selector of selectors){
			await this.page.waitForSelector(selector, {visible: true});
			await this.page.click(selector);
		}
	},

	async getTitle(){
		const selector = selectors[this.marketplace].title;
		const title = await this.page.$eval(selector, (element) =>{
			return element.innerText
		});
		return title;
	},

	async getPrice(){
		const selector = selectors[this.marketplace].price;
		const price = await this.page.$eval(selector, (element) =>{
			return element.innerText
		}).catch((err) => {});
		if (price){
			return price.substring(1).replace(/[^\d.]/g,'');
		}
		else{
			return "0.0"
		}
	},

	async getAvailability(){
		const selector = selectors[this.marketplace].availability;
		const element = await this.page.$(selector);
		return !element;
	},

	generateTimestamp(){
		return new Date().toISOString().slice(0, 19).replace('T', ' ');
	}
};

function pullExistingListings(resolve, reject) {
	let listings = [];
	if (!connection || connection.state != 'authenticated') {
		reject();
		return;
	}
	connection.query("SELECT console_listing_id, console_brand_name, console_type_name, console_condition_name, console_seller_name, console_listing_url, console_listing_active, console_listing_date, console_listing_price FROM console_listings AS l INNER JOIN console_types AS t ON t.console_type_id=l.console_type_id INNER JOIN console_brands AS b ON b.console_brand_id=t.console_brand_id INNER JOIN console_conditions AS c ON c.console_condition_id=l.console_condition_id INNER JOIN console_sellers AS s ON s.console_seller_id=l.console_seller_id;", (error, results, fields) => {
		if (error) {
			console.error(error);
		}
		for (let i in results) {
			listings.push(new ConsoleListing(results[i].console_listing_id, results[i].console_brand_name, results[i].console_type_name, results[i].console_condition_name, results[i].console_seller_name, results[i].console_listing_url, results[i].console_listing_active, results[i].console_listing_date, results[i].console_listing_price));
		}
		resolve(listings);
	});
}

async function addListings(){
	await listingScraper.init();
	for (const [type, system] of consoles.entries()){
		for (const [seller, uri] of system){
			if(!uri){continue;}
			await listingScraper.scrapeListing(type, seller).then(listing => {
				connection.query('INSERT INTO console_listings (console_type_id, console_condition_id, console_seller_id, console_listing_url, console_listing_active, console_listing_date, console_listing_price) VALUES ((SELECT console_type_id FROM console_types WHERE console_type_name = ?), (SELECT console_condition_id FROM console_conditions WHERE console_condition_name = ?), (SELECT console_seller_id FROM console_sellers WHERE console_seller_name = ?), ?, ?, ?, ?);',
					[listing.type, listing.condition, listing.seller, listing.url, listing.active, listing.date, listing.price]);
			});
		}
	}
}

async function updateListings(){
	await listingScraper.init();
	let existingListings = new Promise(pullExistingListings);
	existingListings.then(results => {
		for (var i of results){
			listingScraper.scrapeListing(results[i].type, results[i].seller, results[i].url).then(listing => {
				console.log(listing);
				connection.query('UPDATE console_listings SET console_listing_price = ?, console_listing_active = ?, console_listing_date = ? WHERE console_listing_id = ?;',
					[listing.price, listing.active, listing.date, results[i].id]
				);
			});
		}
	})
}

(async () => {
	connection.query('INSERT INTO console_brands (console_brand_name) VALUES ("Xbox"), ("Nintendo"), ("PlayStation");');
	connection.query('INSERT INTO console_conditions (console_condition_name) VALUES ("New"), ("Renewed"), ("Used");');
	connection.query('INSERT INTO console_sellers (console_seller_name) VALUES ("Amazon"), ("Newegg"), ("ebay"), ("BestBuy");');
	connection.query('INSERT INTO console_types (console_type_name, console_brand_id, console_type_release) VALUES ("Series X", (SELECT console_brand_id FROM console_brands WHERE console_brand_name = "Xbox"), CURDATE()), ("Switch", (SELECT console_brand_id FROM console_brands WHERE console_brand_name = "Nintendo"), CURDATE()), ("PS5", (SELECT console_brand_id FROM console_brands WHERE console_brand_name = "PlayStation"), CURDATE()), ("Series S", (SELECT console_brand_id FROM console_brands WHERE console_brand_name = "Xbox"), CURDATE()), ("PS5DE", (SELECT console_brand_id FROM console_brands WHERE console_brand_name = "PlayStation"), CURDATE());');

	try{
		await addListings();
		connection.query('SELECT * FROM console_listings', (error, results, fields) => {
			if(error){
				console.error(error);
			}
			console.log(results);
		});
	}
	catch(e){
		console.error(e);
	}

	cron.schedule('0 */6 * * *', async () => {
		await updateListings();
	});
})();

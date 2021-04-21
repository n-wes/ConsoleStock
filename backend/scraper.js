import puppeteer from 'puppeteer';

const consoles = require('consoles');
const cron = require('node-cron');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "consolestock",
    password: "cs4345",
    database: "consolestock"
});

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

export const listingScraper = {
	async init(){
		if(!this.page){
			this.browser = await puppeteer.launch();
			let pages = await this.browser.pages();
			this.page = pages[0];
			await this.page.setUserAgent('5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36');
		}
	},

	async terminate(){
		if(this.browser){
			await this.browser.close();
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
			title: await this.getTitle(),
			brand: brand,
			type: type,
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
			console.log(selector);
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
			return price.substring(1);
		}
		else{
			return 
		}
		return price;
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

async function addListings(){
	await listingScraper.init();
	consoles.consoles.forEach((value, system) => {
		value.forEach((uri, seller) => {
			const listing = await listingScraper.scrapeListing(key, seller);
			console.log(listing);
			// INSERT query
		})
	})
	await listingScraper.terminate();
}

async function updateListings(){
	await listingScraper.init();
	connection.query("SELECT console_type_name, console_seller_name, console_listing_url FROM console_listings AS l INNER JOIN console_types AS t ON t.console_type_id=l.console_type_id INNER JOIN console_sellers AS s ON s.console_seller_id=l.console_seller_id;", async (error, results, fields) => {
		if (error) {
			console.error(error);
		}
		for (var i of results){
			const listing = await listingScraper.scrapeListing(results[i].console_type_name, results[i].console_seller_name, results[i].console_listing_url);
			console.log(listing);
			// UPDATE query
		}
	})
	await listingScraper.terminate()
}

cron.schedule('0 */6 * * *', async () => {
	await updateListings();
});
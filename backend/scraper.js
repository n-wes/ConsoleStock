import { consoles } from './consoles.js';
import puppeteer from 'puppeteer';

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

	async scrapeListing(system, marketplace){
		this.system = system;
		this.marketplace = marketplace;
		const uri = consoles.get(system).get(marketplace);
		await this.loadPage(uri);
		
		let listing = {
			type: system,
			seller: marketplace,
			name: await this.getTitle(),
			price: await this.getPrice(),
			condition: "New",
			active: await this.getAvailability(),
			url: uri.split(' ')[0],
			date: this.generateTimestamp(),
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

(async () => {
	await listingScraper.init();
	console.log(await listingScraper.scrapeListing("PlayStation 5", "Amazon"));
	console.log(await listingScraper.scrapeListing("Switch", "BestBuy"));
	console.log(await listingScraper.scrapeListing("Xbox Series X", "Newegg"));
	listingScraper.browser.close();
})();
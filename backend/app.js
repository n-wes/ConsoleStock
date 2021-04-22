const express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: "localhost",
	user: "consolestock",
	password: "cs4345",
	database: "consolestock"
});

const app = express();
const port = 8000;

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

function fetchListings() {
	return new Promise(fetchListingsInner);
}

function fetchListingsInner(resolve, reject) {
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

app.get('/', (req, res) => {
	res.send('ConsoleStock Backend API');
});

app.get('/listings/:id', (req, res) => {
	if (!req.params.id || req.params.id.length === 0) {
		res.status(400).json({ message: "Missing listing ID" });
	} else {
		connection.query("SELECT console_listing_id, console_brand_name, console_type_name, console_condition_name, console_seller_name, console_listing_url, console_listing_active, console_listing_date, console_listing_price FROM console_listings AS l INNER JOIN console_types AS t ON t.console_type_id=l.console_type_id INNER JOIN console_brands AS b ON b.console_brand_id=t.console_brand_id INNER JOIN console_conditions AS c ON c.console_condition_id=l.console_condition_id INNER JOIN console_sellers AS s ON s.console_seller_id=l.console_seller_id WHERE console_listing_id=?;", [req.params.id], (error, results, fields) => {
			if (error) {
				console.log(error);
				res.status(500).json({ message: "A database error occurred" });
				return;
			}

			if (results[0]) {
				res.json(new ConsoleListing(results[0].console_listing_id, results[0].console_brand_name, results[0].console_type_name, results[0].console_condition_name, results[0].console_seller_name, results[0].console_listing_url, results[0].console_listing_active, results[0].console_listing_date, results[0].console_listing_price));
			} else {
				res.status(404).json({ message: "No listing found for that ID" });
			}
		});
	}
});

app.get('/listings', (req, res) => {
	let brand = undefined;
	let type = undefined;
	let condition = undefined;
	let seller = undefined;
	let active = false;
	let maxPrice = -1;

	if (req.query.brand) {
		brand = req.query.brand.toUpperCase();
	}

	if (req.query.type) {
		type = req.query.type.toUpperCase();
	}

	if (req.query.condition) {
		condition = req.query.condition.toUpperCase();
	}

	if (req.query.seller) {
		seller = req.query.seller.toUpperCase();
	}

	if (req.query.active) {
		active = (req.query.active == "true");
	}

	if (req.query.maxPrice) {
		maxPrice = req.query.maxPrice;
	}

	fetchListings().then(list => {
		res.json({
			listings: list.filter(listing => {
				if (brand && listing.brand.toUpperCase() != brand) {
					return false;
				}
	
				if (type && listing.type.toUpperCase() != type) {
					return false;
				}
	
				if (condition && listing.condition.toUpperCase() != condition) {
					return false;
				}
	
				if (seller && listing.seller.toUpperCase() != seller) {
					return false;
				}
	
				if (active && !listing.active) {
					return false;
				}

				if (!active && listing.active) {
					return false;
				}
	
				if (maxPrice != -1 && listing.price > maxPrice) {
					return false;
				}
	
				return true;
			})
		});
	});
});

app.listen(port, () => connection.connect());
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

export const consoles = new Map([
	["PlayStation 5", PS5],
	["PlayStation 5 Digital Edition", PS5DE],
	["Xbox Series X", XSX],
	["Xbox Series S", XSS],
	["Switch", NS]
])
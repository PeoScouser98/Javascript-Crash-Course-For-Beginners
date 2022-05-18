const products = [
	{ name: "msi", price: 2000, type: "high-quality" },
	{ name: "macbook", price: 2000 },
	{ name: "acer", price: 2000, type: "high-quality" },
	{ name: "asus", price: 2000 },
];
const filterProduct = products.groupBy(type);
console.log(filterProduct);

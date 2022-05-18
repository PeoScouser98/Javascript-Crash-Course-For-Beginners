import renderData from "./render.js";
async function getData(render, url) {
	const response = await fetch(url);
	// console.log(typeof response); // object
	const data = await response.json();
	render(data);
}
getData(renderData, "http://localhost:3000/products/");

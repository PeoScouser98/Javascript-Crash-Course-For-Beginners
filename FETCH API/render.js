const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
function renderData(data) {
	if (Array.isArray(data)) {
		const output = data
			.map((item, index) => {
				return /*html*/ `<tr>
									<td scope="row">${item.id}</td>
									<td>${item.productName.toUpperCase()}</td>
									<td>${item.brand.toUpperCase()}</td>
									<td>${item.price}</td>
									<td><button class="btn btn-danger" onclick="removeItem(${index})">Delete</button></td>
								</tr>`;
			})
			.join("");
		const productList = $("#product-list");
		productList.innerHTML = output;
	} else console.log("data is not an array!");
}
export default renderData;

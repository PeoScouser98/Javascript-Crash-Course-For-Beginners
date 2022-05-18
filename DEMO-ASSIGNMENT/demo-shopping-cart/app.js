const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// lấy ra các phẩn tử để đóng mở modal
const addToCart_modal = $("#addToCart-modal");
const showModal_btn = $("#show-modal-btn");
const hideModal_btn = $("#hideModal-btn");
const addProductForm = $("#add-product--form");
const totalAmount = $("#total-amount");
const cartList = $("#cart-list");
const multiDeleteButton = $("#multi-delete-button");
// lấy ra các trường input thông tin sản phẩm
const productName = $("#product-name");
const price = $("#price");
const quantity = $("#quantity");

const inputArr = [productName, price, quantity];

//  STEP 1: thêm sản phẩm vào giỏ hàng

// 1.1: show/hide modal (toggle product modal)
showModal_btn.onclick = function () {
	addToCart_modal.style.display = "flex";
};
hideModal_btn.onclick = function () {
	addToCart_modal.style.display = "none";
};

// 1.2: sau khi mở được modal thì thêm các sản phẩm lấy giá trị từ input và đổ vào mảng
const productList = []; // mảng đựng tất cả các sản phẩm đã đc thêm
addProductForm.onsubmit = function (event) {
	event.preventDefault();
	checkNull(inputArr);
	let errorCount = 0;
	const errorMessages = $$(".message");
	errorMessages.forEach((message) => {
		if (message.innerText != "") errorCount++;
	});
	if (errorCount === 0) {
		productList.push({
			name: productName.value,
			price: +price.value,
			quantity: +quantity.value,
		});
		renderProduct(productList);
		alert("Thêm sản phẩm thành công");
	} else alert("Thêm sản phẩm thất bại!");
};

// 1.3 render từ mảng đổ vào html
function renderProduct(data) {
	if (Array.isArray(data)) {
		const products = data
			.map((item, index) => {
				item.totalPrice = item.price * item.quantity;
				item.id = index;
				return /*html*/ `<tr>
				<td><input type="checkbox" class="selected-product--input" name=""></td>
				<td>${item.name}</td>
				<td>${item.price}</td>
				<td>${item.quantity}</td>
				<td>${item.totalPrice}</td>
				<td><button class="remove-btn" onclick="removeProduct(${index})">Xoá</button></td>
			</tr>`;
			})
			.join("");

		// đổ sản phẩm đã đc render thành html vào tbody cartList
		getTotalAmount(data);
		cartList.innerHTML = products;
		if (data.length == 0) showEmpty();
	}
}

// STEP 2: xoá sản phẩm khỏi giỏ hàng
function removeProduct(index) {
	productList.splice(
		productList.findIndex((item) => item.id == index),
		1,
	);
	renderProduct(productList);
}

// STEP 3: tính tiền
function getTotalAmount(products) {
	let total = products.reduce((previousValue, currentValue) => {
		return previousValue + currentValue.totalPrice;
	}, 0);
	totalAmount.innerText = total;
}

/**
 * CÁCH THỨC HOẠT ĐỘNG CỦA array.reduce() => trả về giá trị duy nhất của các phần tử trong mảng với 1 giá trị khởi tạo
 * array [value1, value2, ....]
 * lần 1: 0 + value1
 * lần 2:  0 + value1 + value2
 * ...
 * lần n : 0 + value1 + value2 +... value(n)
 */

// STEP 4: SHOW EMPTY CART
function showEmpty() {
	cartList.innerHTML = /*html */ `<tr>
										<td colspan="6" style="text-align: center">Bạn chưa thêm sản phẩm nào !</td>
									</tr>`;
}
if (productList.length == 0) showEmpty();
// DELETE MULTIPLE PRODUCTS
if (multiDeleteButton) {
	multiDeleteButton.addEventListener("click", () => {
		const checkboxes = $$(".selected-product--input");
		checkboxes.forEach((input, index) => {
			if (input.checked === true) {
				productList.splice(
					productList.findIndex((item) => item.id == index),
					1,
				);
			}
		});
		renderProduct(productList);
	});
}

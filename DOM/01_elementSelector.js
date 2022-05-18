// select phần tử trong DOM = document.querySelector(".class_name");
function displaySum(sum) {
	console.log(sum);
}
function calculateSum(x, y, callback) {
	callback(x + y);
}
calculateSum(1, 2, displaySum);

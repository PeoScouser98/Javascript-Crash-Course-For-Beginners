/**
 * Promise
 *  - sync (đồng bộ - là code sẽ đươc chạy tuần tự từ trên xuống dưới)
 *  - async (bất đồng bộ  - là code sẽ chạy theo luồng xử lý của dữ liệu)
 *  - callback hell
 *  - Cách thức hoạt đông của Promise
 * Fetch
 * DOM location
 * localstorage
 * session storage
 * coding convention
 *
 */

// đồng bộ và bất đồng bộ
/**
 * setTimeOut, setInterval, fetch
 * XMHttpRequest , file reading
 * request animation frame
 */

// console.log(1); // => theo luồng xử lý đồng bộ, 1 sẽ được in ra trước
// console.log(2); // => 2 sẽ được in ra sau

// demo async - bất đồng bộ -> không theo tuần tự chạy code từ trên xuông dưới
// setTimeout(() => {
// 	console.log("đoạn code này sẽ được chạy sau 1s"); // đoạn code này được viết trước nhưng sẽ được thực thi sau 1s
// }, 2000);

// console.log("đoạn code này sẽ được thực thi ngay lập tức !");

// callback hell
// setTimeout(function () {
// 	console.log("làm công việc 1");
// 	setTimeout(function () {
// 		console.log("làm công việc 2");
// 		setTimeout(function () {
// 			console.log("làm công việc 3");
// 		}, 1000);
// 	}, 1000);
// }, 1000);
const dataAPI = [
	{
		courseName: "Promise",
		function() {
			console.log("Learn Javascript");
		},
	},
];

const promise = new Promise(
	// executor đối tương thưc thi
	function (resolve, reject) {
		// resolve và reject là 2 callback function
		// thành công : resolve()
		// thất bại: reject()
		// fake call API
		if (Array.isArray(dataAPI)) {
			resolve(dataAPI);
		} else {
			reject();
		}
	}
);
promise
	.then(function (data) {
		// khi thực hiện thành công => resolve() được gọi thì callback trong then() sẽ đươc gọi
		console.log(data);
		console.log("Successfully!");
	})
	.catch(function () {
		// khi có lỗi xảy ra => reject() được gọi thì callback trong catch() sẽ được goi
		console.log("Fail!");
	})
	.finally(function () {
		// khi 1 trong 2 hàm resolve và reject được gọi thì callback trong finally() sẽ được gọi
		console.log("Done!");
	});
/**
 * TRẠNG THÁI HOẠT ĐỘNG CỦA PROMISE
 * 1. pending - đang chờ xem công việc được xử lý thành công hay thất bại
 * 2. fulfill - trạng thái khi xử lý công việc thành công
 * 3. reject - trạng thái khi xử lý công việc thất bại
 */

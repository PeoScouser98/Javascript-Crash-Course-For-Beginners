// hàm không có tham số truyền vào

// hàm có tham số truyền vào

// hàm không có giá trị trả về
function sum(x, y) {
	// console.log(x+y);
	return x + y;
}
console.log(sum(1, 2));
// hàm có giá trị trả về

// arrow function

/**
 * --------------------- CALLBACK FUNCTION	--------------------------
 * 1. Nó phải là 1 hàm (function)
 * 2. Nó là 1 tham số của 1 hàm khác
 * Nếu đảm bảo 2 điều kiện này => nó là callback
 */

function solveAssignment(homework) {
	console.log(homework);
}
function doHomework(assignment, solve) {
	solve(`Làm ${assignment}`);
}
// cách 1:
// doHomework("bài tập về callback trong Javascript", function (assignment) {
// 	console.log(`Làm ${assignment}`);
// });

// cách 2:
doHomework("bài tập về callback trong Javascript", solveAssignment);

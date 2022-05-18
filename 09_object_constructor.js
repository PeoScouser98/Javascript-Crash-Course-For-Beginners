// object constructor - hàm tạo
function student(firstName, lastName, id, major) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.id = id;
	this.major = major;
	this.getName = function () {
		return `${this.firstName} ${this.lastName}`;
	};
	this.doHomework = function () {
		console.log("làm bài tập");
	};
}
const student1 = new student("Hiệp", "PH19231", "Front-end web");
// for (const key in student1) {
// console.log(student1[key]);
// }

// console.log(student1);
// console.log(student1.constructor);
// if (student1.constructor == student) {
// 	console.log("student1 được tạo từ constructor student!");
// }

student1.doHomework();
console.log(student1.getName());

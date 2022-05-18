function User(id, username, email) {
	this.id = id;
	this.username = username;
	this.email = email;
	this.login = function () {
		return `Login successfully!`;
	};
}
User.prototype.password = "123456";
const user1 = new User("001", "quanghiep031", "quanghiep031@gmail.com");
console.log(user1.password);
console.log(user1.constructor);
// const user2 = new User("002", "hiep03198", "hieptqph19231@fpt.edu.vn");
// console.log(user2.password);

// thêm 1 thuộc tính cho 1 constructor => khi thêm 1 prototype cho 1 constructor thì tất cả các object đều được kế  thừa từ nó
// console.log(user1);
function product(name, price) {
	this.productName = name;
	this.price = price;
}
const beverage = { name: "Cocacola", price: 10000 };
beverage.taste = "non-sugar";
console.log(beverage);

const product1 = new product("Pepsi", 10000);
product.prototype.taste = "lemon";
console.log(product1.taste);

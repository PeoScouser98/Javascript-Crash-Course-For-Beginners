// khai báo mảng
// const arr = new Array(1, 2, 4, 5, 6);
/**
 * ------------------------------------------------------------------------------
 *                    ARRAY METHOD - PHƯƠNG THỨC XỬ LÝ MẢNG
 * ------------------------------------------------------------------------------
 */

// forEach
/**
 * array_name.foreach(callback(item){
 * item đại diện cho từng phần tử trong mảng
 * })
 *
 */
// array.forEach((item) => {
// 	console.log(item);
// });

// filter => trả về 1 maảng mới gồm các phần tử thoả dk trả về của callback
// const evenNumbers = array.filter((item) => item % 2 == 0);
// console.log(evenNumbers);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// find => trả về phần tử đầu tiên mà nó tìm thấy trong mảng mà phần tử này thoả điều kiện trả về của callback
const secondEvenNumber = array.find((item) => item % 2 == 0 && item > 2);
console.log(secondEvenNumber);

//indexOf => trả về index của phần tử đầu tiên mà nó tìm thấy dựa kết quả trả về của callback

const indexOf_four = array.indexOf(4);
console.log(indexOf_four);

// splice => xoá hoặc thay thế 1 phần tử trong mảng (index của phần tử băt đầu xoá, số lượng phần tử muốn xoá, giá trị của phần tử mới)
// ngoài ra splice trả vê 1 mảng mới gồm các phần tử đã xoá khỏi mảng

// annoymous function = hàm ẩn danh
// const two = array.find((item) => item == 2);
// const indexOfTwo = array.indexOf(two);
// console.log(indexOfTwo);
// array.splice(indexOfTwo, 1);
// console.log(array);

// const deletedNumbers = array.splice(array.indexOf(5), 1);
// console.log(deletedNumbers)

// slice (trích từ mảng gốc => đổ vào mảng mới) (index của phần tử đầu tiên mà nó sẽ csắ)
// const newArray = array.slice(4);
// console.log(newArray);

// join (chuyển 1 mảng thành 1 chuỗi) thông qua 1 ký tự ngăn cách (seperator)
// const stringifyArray = array.join("");
// console.log(stringifyArray);
// console.log(typeof stringifyArray);

// map => trả về 1 mảng mới gồm các phần tử là giá trị trả về của callback truyền vào
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/**
 * map() => tạo ra mảng mới, từ mảng cũ
 * giá trị mới, và không thay đổi giá trị của mảng cũ
 * imte
 */
// demo callback
/**
 *
 * callback:
 * là 1 tham số
 * là 1 hàm
 * và được gọi lại trong 1 hàm
 */
function printSum(sum) {
	console.log(sum);
}
function calcSum(x, y, callback) {
	callback(x + y);
}

calcSum(1, 2, printSum);
const numbers = [1, 2, -3, 4, -5];

// const absNums = numbers.map();

// const absNumbers = numbers.map((item,index) => Math.abs(item));

// const strNumbers = numbers.map(function (item, index) {
// 	console.log(index);
// 	return item.toString();
// });
// console.log(strNumbers);

// // push => thêm 1 phần tử mới vào cuối mảng
// numbers.push(6);
// console.log(numbers);

// // some
// // const checkNumbers = absNumbers.some(item => item<0) ;
// // console.log(checkNumbers);

// //every
// const check = absNumbers.every((item) => item > 0);
// console.log(check);

// // fill => thay đổi các phần tử trong mảng bằng một giá trị mới và đưa nó vào 1 mảng mới
// const fruits = ["banana", "grape", "orange"];
// const money = fruits.fill("money");
// console.log(money);

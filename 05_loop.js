// vòng lặp for
const array = [1, 2, 3, 4];
for (let index = 0; index < array.length; index++) {
	console.log(array[index]);
}
console.log(array.length);
/**
 * index = 0 => index< array.length
 * index = 1 => index< array.length
 * index = 2 => index< array.length
 * index = 3 => index< array.length
 * index = 4 => index< array.length => thoát vòng lặp
 */
// vòng lặp while và do-while
let index = 0;
do {
	console.log(index);
	index++;
} while (index < 5);
// vòng lặp for-in (được dùng để lặp qua các thuộc tính của object)
const person = {
	name: "Truong",
	age: "25",
	handsome: true,
};
// vòng lặp for-in đdẻ lọc qua từng thuộc tính của 1 đối tượng (object) (khong dung trong mag dc)
for (const key in person) {
	console.log(`${key}: ${person[key]}`);
}

const name = "hiep";
console.log(`ten toi la: ${name}`);
// vòng lặp for-of (được dùng để lặp qua các phần tử trên string và array)
for (const element of array) {
	console.log(element);
}
// break và continue
for (let index = 0; index < array.length; index++) {
	if (index == 2) {
		continue;
	}
	console.log(array[index]);
}

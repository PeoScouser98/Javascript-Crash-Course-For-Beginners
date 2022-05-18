/**
 *  trim() => cắt khoảng trắng 2 đầu của 1 chuỗi
 *  indexOf() => lấy ra index của ký tự đầu tiên mà nó tìm thấy, nếu ko sẽ trả về -1
 *  replace() => thay thế 1 chuỗi
 *  split(separator,numberOfElemnt) => trả về 1 mảng gôm các phần tử là các chuỗi con thông qua các phần tử ngăn cách (separator) và số lượng phần tử muốn lấy (numberOfElemnt)
 *  charAt(index) => lấy ra index của 1 ký tự trong chuỗi
 *  substring(startIndex,endIndex) => trả về 1 chuỗi mới lấy bắt đầu từ 1 vị trí nào đó trong chuỗi
 *  toUpperCase() và toLowerCase()
 */

// CHUẨN HOÁ CHUỖI VỚI CÁC PHƯƠNG THỨC STRING
let singerName = "      eiMi    fuKaDa    "; // => Eimi Fukada
// STEP 1: cắt khoảng trắng ở 2 đầu chuỗx
singerName = singerName.trim();

// STEP 2: thay thế các khoảng trang thua o trong chuoi => " "
do {
	singerName = singerName.replace("  ", " ");
} while (singerName.indexOf("  ") != -1);
console.log(singerName);

// STEP 3:

// step 3.1 chuẩn hoá cac chuỗi con bằng cách tách các chuỗi con thành các phần tử của mảng
const subNames = singerName.split(" ");
console.log(subNames);
let result = "";
// step 3.2
for (let subname of subNames) {
	let firstLetter = subname.charAt(0).toUpperCase();
	// console.log(firstLetter);\
	let remainLetters = subname.substring(1, subname.length).toLowerCase();
	// console.log(remainLetters);
	subname = firstLetter + remainLetters;
	result += subname + " ";
}
console.log(result.trim());

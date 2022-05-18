const array = { name: "hiep", age: 24, email: "quanghiep03198@gmail.com" };
try {
	if (Array.isArray(array)) {
		console.log("this is an  array!");
	} else throw new Error("this is not an array");
} catch (error) {
	console.log(error);
} finally {
	console.log("done!");
}

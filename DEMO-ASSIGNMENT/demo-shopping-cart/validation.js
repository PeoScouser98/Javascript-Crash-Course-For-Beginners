function showMessage(input, message) {
	const errorMessage = input.parentElement.querySelector(".message");
	errorMessage.innerText = message;
}
function checkNull(inputArr) {
	for (const input of inputArr) {
		input.value == ""
			? showMessage(input, "Không được để trống trường này")
			 : showMessage(input, "");
	}
}

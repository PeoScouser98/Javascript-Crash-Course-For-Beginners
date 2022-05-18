//  tạo phương thức để show slide
let index = 1;
function displaySlide() {
	// show ảnh được chuyển tới và ẩn tất cả ảnh còn lại
	const slides = document.querySelectorAll(".slide-content");
	const dots = document.querySelectorAll(".dot");

	for (const slide of slides) {
		// mặc định tất các ảnh slide sẽ được ẩn đi
		slide.style.display = "none";
	}
	for (const dot of dots) {
		dot.style.backgroundColor = "var(--secondary)";
	}
	// index
	if (index > slides.length) {
		index = 1;
	}
	if (index < 1) {
		index = slides.length;
	}
	// ảnh đầu tiên phải được hiển thị lên
	slides[index - 1].style.display = "block";
	dots[index - 1].style.backgroundColor = "var(--tertiary)";
}
displaySlide();
// tạo phương thức để chuyển ảnh
function changeSlide(changedIndex) {
	displaySlide((index += changedIndex));
}

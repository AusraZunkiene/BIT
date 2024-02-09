const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
	console.log("a");
	if (window.scrollY > 100) {
		header.style.backgroundColor = "##50685e2";
	} else {
		header.style.backgroundColor = "#50685e";
	}
});
function destroyEvent(event) {
	event.target.remove();
}
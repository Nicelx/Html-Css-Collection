const littleHelper = document.querySelectorAll("*").forEach((el) => {
	if (el.offsetWidth > document.documentElement.offsetWidth) {
		console.log("Found the worst element ever: ", el);
	}
});
window.addEventListener("resize", littleHelper);

// Scroll to top function

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

const goToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

scrollToTopBtn.addEventListener("click", goToTop);

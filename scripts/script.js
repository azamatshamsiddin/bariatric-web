// Scroll to top function
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const goToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

scrollToTopBtn.addEventListener("click", goToTop);

const closeBtn = document.querySelector(".nav__close-btn");
const openBtn = document.querySelector(".header__btn-burger");
const nav = document.querySelector(".nav");

openBtn.addEventListener("click", () => {
	nav.classList.remove("nav--close");
});
closeBtn.addEventListener("click", () => {
	nav.classList.add("nav--close");
});

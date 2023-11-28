window.addEventListener("DOMContentLoaded", () => {
	const swiper = new Swiper(".swiper", {
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				centeredSlides: false,
				slidesPerView: 1.1,
				spaceBetween: 20,
			},
			450: {
				centeredSlides: true,
				slidesPerView: 1.4,
				spaceBetween: 30,
				initialSlide: 1,
			},
		},
	});
});

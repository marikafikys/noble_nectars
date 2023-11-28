window.addEventListener("DOMContentLoaded", () => {
	// const swiper = new Swiper(".swiper", {
	// 	loop: true,
	// 	autoplay: {
	// 		delay: 2000,
	// 		disableOnInteraction: false,
	// 	},
	// 	breakpoints: {
	// 		320: {
	// 			centeredSlides: false,
	// 			slidesPerView: 1.1,
	// 			spaceBetween: 20,
	// 		},
	// 		450: {
	// 			centeredSlides: true,
	// 			slidesPerView: 1.4,
	// 			spaceBetween: 30,
	// 			initialSlide: 1,
	// 		},
	// 	},
	// });

	anim();
});

function anim() {
	gsap.set(".header", {
		height: "100vh",
	});

	gsap.set(".preview__bg", {
		yPercent: 10,
		scale: 1.2,
	});

	const tlHeader = gsap.timeline({
		onComplete: () => {
			ScrollTrigger.refresh();
		},
	});
	tlHeader
		.from(".header__logo img", {
			duration: 0.7,
			autoAlpha: 0,
			yPercent: -100,
			stagger: 0.2,
		})
		.to(".header", {
			duration: 0.8,
			height: "auto",
			delay: 0.3,
		})
		.to(
			".header__logo",
			{
				duration: 0.8,
				scale: 1,
			},
			"<"
		)
		.from(
			".preview",
			{
				duration: 1.3,
				autoAlpha: 0,
			},
			"<"
		)
		.from(
			".promo__title",
			{
				duration: 1,
				yPercent: 50,
				autoAlpha: 0,
			},
			"-=0.7"
		)
		.from(
			".promo__wrap",
			{
				duration: 1,
				yPercent: 50,
				autoAlpha: 0,
			},
			"<"
		);

	gsap.to(".preview__bg", {
		yPercent: -10,
		scrollTrigger: {
			trigger: ".preview",
			start: "top 150px",
			end: "bottom top",
			scrub: 1,
			markers: true,
		},
	});
}

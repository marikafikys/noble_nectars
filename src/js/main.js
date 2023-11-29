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
			".promo__img",
			{
				yPercent: 50,
				autoAlpha: 0,
			},
			"<"
		);

	gsap.set(".promo__title", {
		opacity: 1,
	});

	gsap.to(".preview__bg", {
		yPercent: -10,
		scrollTrigger: {
			trigger: ".preview",
			start: "top 150px",
			end: "bottom top",
			scrub: 1,
		},
	});

	const tlTitles = gsap.timeline({
		scrollTrigger: {
			trigger: ".promo__info",
			start: "top 80%",
			end: "top 40%",
			scrub: true,
		},
	});
	tlTitles
		.to(".promo__title", {
			opacity: 0.1,
		})
		.from(
			".promo__info",
			{
				opacity: 0.1,
			},
			"<"
		);

	const tlPromo = gsap.timeline({
		scrollTrigger: {
			trigger: ".promo__wrap",
			start: "top top",
			end: "bottom+=100%",
			scrub: true,
			pin: true,
		},
	});
	tlPromo
		.to(".promo__left-inner", {
			y: 0,
		})
		.to(
			".promo__img",
			{
				y: "-100vh",
			},
			"<"
		);

	const tlFeatures = gsap.timeline({
		scrollTrigger: {
			trigger: ".features__wrap",
			start: "top 70%",
			end: "top 40%",
			toggleActions: "play none reverse none",
		},
	});
	tlFeatures
		.to(".features__title", {
			opacity: 0.1,
		})
		.from(".features__item", {
			opacity: 0,
			yPercent: "random([20, 40, 60])",
			stagger: {
				from: "center",
				each: 0.1,
			},
		});

	gsap.set(".tradition", {
		background: "#100F0D",
	});
	gsap.set(".tradition__title", {
		color: "#EDEAE2",
	});
	const tlBg = gsap.timeline({
		scrollTrigger: {
			trigger: ".tradition",
			start: "top 50%",
			end: "bottom bottom",
			duration: 0.7,
			toggleActions: "play reverse play reverse",
		},
	});
	tlBg
		.to("body", {
			background: "#EDEAE2",
		})
		.to(
			".features__name",
			{
				color: "#BB9930",
			},
			"<"
		)
		.to(
			".tradition",
			{
				background: "#EDEAE2",
			},
			"<"
		)
		.to(
			".tradition__title",
			{
				color: "#BB9930",
			},
			"<"
		);

	gsap.set(".parallax img", {
		scale: 1.3,
		yPercent: 15,
	});

	const parallaxBlocks = document.querySelectorAll(".parallax");
	parallaxBlocks.forEach((block) => {
		const img = block.querySelector("img");
		gsap.to(img, {
			yPercent: -15,
			scrollTrigger: {
				trigger: block,
				start: "top 80%",
				end: "bottom 20%",
				scrub: 1,
			},
		});
	});

	const tlCountry = gsap.timeline({
		scrollTrigger: {
			trigger: ".country__right",
			start: "top 40%",
			end: "top 5%",
			scrub: true,
		},
	});

	tlCountry
		.to(".country__title", {
			opacity: 0.1,
		})
		.from(
			".country__right",
			{
				opacity: 0.1,
			},
			"<"
		);

	gsap.set(".story", {
		background: "#100F0D",
	});
	gsap.set(".story__title", {
		color: "#EDEAE2",
	});
	const tlStory = gsap.timeline({
		scrollTrigger: {
			trigger: ".story",
			start: "top 50%",
			end: "bottom 50%",
			duration: 0.7,
			toggleActions: "play reverse play reverse",
		},
	});
	tlStory
		.to("body", {
			background: "#EDEAE2",
		})
		.to(
			".country__right",
			{
				color: "#BB9930",
			},
			"<"
		)
		.to(
			".story",
			{
				background: "#EDEAE2",
			},
			"<"
		)
		.to(
			".story__title",
			{
				color: "#BB9930",
			},
			"<"
		);

	const sections = gsap.utils.toArray(".slider__slide");
	gsap.set(".slider__text", {
		opacity: 0.1,
	});

	const slider = gsap.to(".slider__wrapper", {
		xPercent: -100 * (sections.length - 1),
		ease: "none", // без этого containerAnimation не сработает
		scrollTrigger: {
			trigger: ".story__slider",
			start: "top top",
			end: `+=${sections.length * 1000}`,
			// end: () => {return '+=' + document.querySelector('.slider__wrapper').offsetWidth},
			pin: true,
			scrub: true,
		},
	});

	document.querySelectorAll(".slider__text").forEach((item, index) => {
		if (index !== 0) {
			gsap.to(item, {
				opacity: 1,
				scrollTrigger: {
					trigger: item,
					start: "left 60%",
					end: "+=500px",
					scrub: 1,
					containerAnimation: slider,
				},
			});
		} else {
			gsap.to(item, {
				opacity: 1,
				duration: 0.5,
				scrollTrigger: {
					trigger: ".story__slider",
					start: "top top",
					toggleActions: "play reverse play reverse",
				},
			});
		}
	});
}

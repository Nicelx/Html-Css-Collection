var audio = document.querySelector(".header__video");

const headerBtn = document.querySelector('.header__btn');
headerBtn.addEventListener('click', (e) => {
		audio.play();
		e.target.style.opacity = 0;
})
audio.volume = 0.8;

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});
const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));
const title = document.querySelector(".header__title");
const st = document.querySelector(".header__title_2");
const tt = document.querySelector(".header__title_3");

setTimeout(() => {
	st.classList.add("titles-show");
}, 2500);
setTimeout(() => {
	tt.classList.add("titles-show");
}, 4500);

setTimeout(() => {
	if (window.screen.width <= 800) {
		st.style.opacity = 0;
		tt.style.opacity = 0;
		title.style.opacity = 0;
		return;
	} else {
		st.style.opacity = 0;
		tt.style.opacity = 0;
		st.style.transform = "translateX(150px)";
		tt.style.transform = "translateX(-150px)";
		title.style.opacity = 0;
	}
}, 7000);

const footer = document.querySelector(".footer");
const footerTrack = footer.querySelector(".footer__track");
const footerFirst = footer.querySelector(".footer__first-block");
const footerMe = footer.querySelector(".footer__me");
const footerWants = footer.querySelector(".footer__wants");
const footerWants2 = footer.querySelector(".footer__wants_2");
const footerBlock3 = footer.querySelector(".footer__block_3");

const footerBtn = document.querySelector(".footer__btn").addEventListener("click", () => {
	footerTrack.style.transform = "translateX(-100vw)";
	footerTrack.style.animation = "fadeInOut 2s linear";
	setTimeout(() => {
		footerMe.style.opacity = 1;
		footerTrack.style.animation = "";
	}, 2000);
	setTimeout(() => {
		footerTrack.style.transform = "translateX(-200vw)";
		footerTrack.style.animation = "fadeInOut 2s linear";
		setTimeout(() => {
			footerWants.style.opacity = 1;
			footerWants2.style.opacity = 1;
			footerBlock3.style.opacity = 0;
		}, 3000);
	}, 8000);
	setTimeout(() => {
		footerTrack.style.transition = 'all 0s';
		footerTrack.style.transform = "translateX(0)";
		footerTrack.style.animation = "";
		footerWants.style.opacity = 0;
		footerWants2.style.opacity = 0;
		footerBlock3.style.opacity = 1;
		setTimeout(() => {
			footerTrack.style.transition = 'all 2s linear';
		}, 100)
	}, 20000);
});

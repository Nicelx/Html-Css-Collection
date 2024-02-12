var video = document.querySelector(".header__video").volume = .6;

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show')
		} else {
			entry.target.classList.remove('show');
		}
	})
});
const hiddenElements = document.querySelectorAll('.hide')
hiddenElements.forEach(el => observer.observe(el))
const title = document.querySelector('.header__title')
const st = document.querySelector('.header__title_2');
const tt = document.querySelector('.header__title_3');

setTimeout(() => {
	st.classList.add('titles-show')
}, 2500)
setTimeout(() => {
	tt.classList.add('titles-show')
}, 4500)

setTimeout(() => {
	st.style.opacity = 0;
	st.style.transform = 'translateX(150px)'
	tt.style.opacity = 0;
	tt.style.transform = 'translateX(-150px)'
	title.style.opacity = 0;
}, 7000)

const footer = document.querySelector('.footer');
const footerTrack = footer.querySelector('.footer__track')
const footerFirst = footer.querySelector('.footer__first-block');
const footerBtn = document.querySelector('.footer__btn').addEventListener('click', () => {
	// alert('hi')
	footerTrack.style.transform = 'translateX(-100vw)';
	footerTrack.style.animation = "fadeInOut 1.5s linear"
});


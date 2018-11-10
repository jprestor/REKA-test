'use strict';

const mainPage = document.querySelector('#main-page'),
	main = document.querySelector('main'),
	btn = document.querySelector('.screen a'),
	popup = document.querySelector('.popup'),
	popupCloseBtn = document.querySelector('.btn-close'),
	overlay = document.querySelector('.overlay'),
	loader = document.querySelector('.loader'),

	fadeLoader = () => {
		setTimeout(() => {
			loader.style.display = 'none';
		}, 600);
	},

	openPopup = (e) => {
		e.preventDefault();
		main.setAttribute('style', 'filter: blur(10px)');
		overlay.setAttribute('style', 'display:block');
		popup.setAttribute('style', 'display:block');
	},

	closePopup = (e) => {
		e.preventDefault();
		main.setAttribute('style', 'filter: none');
		overlay.setAttribute('style', 'display:none');
		popup.setAttribute('style', 'display:none');
	};


window.addEventListener('load', fadeLoader);

if (mainPage) {
	btn.addEventListener('click', openPopup);
	popupCloseBtn.addEventListener('click', closePopup);
	overlay.addEventListener('click', closePopup);
};

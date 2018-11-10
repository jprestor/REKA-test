'use strict';

const btn = document.querySelector('#main-page .screen a'),
	popup = document.querySelector('.popup'),
	popupCloseBtn = document.querySelector('.btn-close'),
	overlay = document.querySelector('.overlay'),
	main = document.querySelector('#main-page main'),

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

btn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

const icon = document.querySelector('.header__menu-btn');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});
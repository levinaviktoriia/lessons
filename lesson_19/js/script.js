const icon = document.querySelector('.actions-header__icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});
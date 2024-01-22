
// ? Задача №2
/*
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/
// *Рішення:
window.addEventListener("load", pageLoaded) // слухаємо завантаження window
function pageLoaded(e){
	// функція, яка при події вікна "load", до body додасться клас - loaded
	document.body.classList.add('loaded')
}
// ? Задача №1
/*
Дано в html: три елементи з класом item.
При кліку на кожен з елементів додати клас active,
при повторному кліку прибрати клас 
*/
// *Рішення завдання №1 (1-й спосіб):
/*
const item = document.querySelector('.item')
const items = document.querySelectorAll('.item')
items.forEach(item => {
	item.addEventListener("click", clickActive)
})
function clickActive(e){
	const targetElement = e.target
	if(targetElement.closest('.item')){
		const itemClick = targetElement.closest('.item')
		itemClick.classList.toggle('active')
	}
}
*/
// ? Задача №3
/*
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.
*/
// *Рішення загальне для завдання №1 та №3(через делегування події):
document.addEventListener("click", documentAction) 
document.addEventListener("mousemove", documentAction)
document.addEventListener("mouseleave", documentAction)
function documentAction(e){
	const targetElement = e.target  
	const footer = document.querySelector('footer')

   // *Рішення завдання №1 :
	if(e.type === "click"){ // при події "click"
		const item = targetElement.closest('.item')
		if(item){  // та наявності єлемента з классом .item
			item.classList.toggle('active') // додати якщо немає та прибрати якщо є клас - active
		}

   // *Рішення завдання №3 :
	} else if (e.type === "mousemove") {  // при події "mousemove"
		if(footer){ // та наявності єлемента footer
			if (targetElement.closest('header')) {  // при русі мишкою над элементом header
				footer.classList.add('footer-bg'); // додавати до footer клас - footer-bg
		  } else if(footer.classList.contains('footer-bg')){ // якщо footer має клас - footer-bg
				footer.classList.remove('footer-bg'); // прибрати його
		  }
		}
   } else if (e.type === "mouseleave") {  // при події "mouseleave"
		if(footer){// та наявності єлемента footer
			if(footer.classList.contains('footer-bg')){// коли миша залишає в'юпорт також
				 footer.classList.remove('footer-bg');// також прибрати клас .footer-bg у footer
			}
		}
	}
}
// ? Задача №4
/*
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
*/
// *Рішення:
const itemNumb = document.querySelector('.task-four__item')
function countingNumbers () {
	let delay= parseFloat(itemNumb.dataset.delay) 
	// змінна затримки часу витягнута, з data-delay="1000ms" 
	let finalNumb= parseFloat(itemNumb.dataset.finalNumber)
	// змінна останньої цифри відліку, витягнута з data-final-number="5"
	let i = 1 // початкове значення відліку
	let timer = setInterval(() =>{  // функція інтервалу
		itemNumb.textContent = i // в елемент з класом .task-four__item передаватиметься значення змінної - 'i'
		if (i=== finalNumb){ // якщо 'i' дорівнює finalNumb 
			clearInterval(timer) // відлік закінчено
		}
		++i // крок
	},delay)
}
let options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 1, 
};
let isCountingStarted = false; // змінна, яка дозволить зупинити відлік

let callback = (entries, observer) => {
	entries.forEach((entry) => {
		const targetElement = entry.target;
		if (entry.isIntersecting && !isCountingStarted) { 
			targetElement.classList.add("show");
			countingNumbers () 
			isCountingStarted = true;
		}
	});
}
let observer = new IntersectionObserver(callback, options);
if(itemNumb){ // якщо елемент itemNumb існує
	observer.observe(itemNumb); // то при скролі до єлемента виконується відлік
}
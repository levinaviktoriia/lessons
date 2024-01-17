// ? Задача №1
/* 
Отримати в константу елемент <body>
*/
// *Рішення:
const bodyElement = document.body
// console.log(bodyElement)

// ? Задача №2
/* 
Написати функцію, яка додає в <body> список UL з певною 
кількістю LI (кількість має передаватись як параметр функції,
також мати значення за замовченням)
*/
// *Рішення:
function createUnorderedList(item=3){ // item - кількість пунктів за замовчуванням
	let newList = document.createElement(`ul`) // створюємо об'єкт зі списком
	for (i=1; i<=item; ++i){
		let li = document.createElement(`li`) // створюємо об'єкт з пунктом списку
		newList.append(li) // вставляємо пункт у кінець списку
		li.textContent = `Пункт №${i}` // наповнюємо текстом
	}
	bodyElement.append(newList) // вставляємо список у кінець body
}
createUnorderedList(5)

// ? Задача №3
/* 
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тесту зелений.
*/
// *Рішення:
bodyElement.classList.add(`loaded`)
if(bodyElement.classList.contains(`loaded`)){
	bodyElement.style.color = `green`
}
// bodyElement.classList.contains(`loaded`) ? bodyElement.style.color = `green` : null
// ? Задача №4
/* 
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
*/
// *Рішення:
let itemBlocks = bodyElement.querySelectorAll(`.item`) // отримуємо у змінну itemBlocks колекцію об'єктів із класом .item
if(itemBlocks.length){ // якщо колекція поверне true (хоча б один об'єкт item), перебір колекції виконається
	itemBlocks.forEach((item, n=1) => { 
		item.classList.add(`active`) // додаємо клас до кожного об'єкту item
		item.textContent = `Елемент №${++n}` // та наповнюємо його контентом
	});
}
	
// ? Задача №5
/* 
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки
*/
// *Рішення:
const button = document.querySelector(`.button`) // шукаємо кнопку з класом-.button та отримуємо в константу - button
if(button){ // якщо кнопка існує, відбудеться скрол
	button.scrollIntoView({
		block: "start",
		behavior: "smooth"
	})
}

// ? Задача №6
/* 
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Потім отримати значення атрибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний
*/
// *Рішення:
const link = document.querySelector(`.link`)
if(link){
	link.dataset.number = 100  // Додали data-атрибут : data-number="100"
	let number = parseFloat(link.dataset.number) // Отримали значення атрибуту. Також працює:   let number = link.getAttribute(`number`)
	if(number < 200){
		link.style.color = `red`
	}
	// number < 200 ? link.style.color = `red` : null
}

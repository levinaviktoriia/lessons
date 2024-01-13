"use strict"

/*
?Задача №1
Що потрапить в консоль?
let someVar = 0;    
++someVar;    
if (someVar) {
	console.log(someVar);  
}
*Ответ:
1. ++someVar = someVar + 1 = 0 + 1 = 1
2. Условие if (someVar) переводит в булевое значение someVar - true.
3. Т.к. условие верно(true), в консоль выводится значение переменной someVar:
   1
*/

/*
?Задача №2
За допомогою циклу FOR виведіть в консоль 10 рядків:
Пункт №1
Пункт №2
і т.д.
*/
// *Ответ:
let item = `Пункт №`
for (let i=1; i<11; ++i) {
	console.log(`${item} ${i}`)
}

/*
?Задача №3
Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}
*Ответ:
1. 40 <= 10 || 15 < 5 && 10 <= "10" || 20 === "20";
2. false || false && true || false;
3. false || false || false;
4. false;
5. Консоль ничего не выведет, поскольку условие не верно - false.
*/

/*
?Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку 
*/
// *Ответ:
function calcDividing(a=0, b=1){
	const result = a / b
	if(isNaN(result)){
		console.log(`Введіть правильні дані.`)
		}else{
		console.log(`Результат ділення: ${result}.`)
	}
	// isNaN(result) ? console.log(`Введіть правильні дані.`) : console.log(`Результат ділення: ${result}.`)
}
calcDividing(-20, -5)
calcDividing(10, `3`)
calcDividing(14763874, 325635)
calcDividing(-10)
calcDividing()
calcDividing(30, `Hi!`)

/*
?Задача №5
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
*/
let someNumbers = [10, 110, 310, 400, 1110]
someNumbers.forEach(item => {
	console.log(item)
})
if(someNumbers.includes(10)){
	console.log(10)
}else{
	console.log(`Масив не містить значення 10.`)
}
// someNumbers.includes(10) ? console.log(10) : console.log(`Масив не містить значення 10.`)

// !Практика
// Операторы сравнения
/*
let result = 5 < `6`
console.log(result)

result = 5 >= `5`
console.log(result)

result = 5 == `5.5`
console.log(result)
result = 5 != `5.5`
console.log(result)

result = 5 !== 5.5
console.log(result)
result = 5 !== `5`
console.log(result)
result = 5 === `5`
console.log(result)

// Оператор !
let varNo = !`5.5`
console.log(varNo)
varNo = !``
console.log(varNo)
varNo = !` `
console.log(varNo)
varNo = !3
console.log(varNo)

// Оператор ||
let varOr = 5 || 1
// 5, true
console.log(varOr) 
console.log(Boolean(varOr))

varOr = `` || 1
// 1, true
console.log(varOr)
console.log(Boolean(varOr))
varOr = ` ` || 1
// , true
console.log(varOr)
console.log(Boolean(varOr))

varOr = 0 || `5`
// 5, true
console.log(varOr)
console.log(Boolean(varOr))

varOr = !0 || `5`
// true, true
console.log(varOr)
console.log(Boolean(varOr))

// Оператор &&
let varAnd  = 5 && 1
// 1, true
console.log(varAnd)
console.log(Boolean(varAnd))

varAnd  = 5 && `3`
// 3, true
console.log(varAnd)
console.log(Boolean(varAnd))

varAnd  = 5 && ``
// , false
console.log(varAnd)
console.log(Boolean(varAnd))

varAnd  = 5 && ` `
// , true
console.log(varAnd)
console.log(Boolean(varAnd))

varAnd  = `Ann` && `Mary`
// Mary, true
console.log(varAnd)
console.log(Boolean(varAnd))

varAnd  = 0 && `5`
// 0, false
console.log(varAnd)
console.log(Boolean(varAnd))

let varSomeRes =  10 || 3 && 5
// Сначала && (5), затем || (10)
console.log(varSomeRes)

varSomeRes =  !10 || 3 && 5
// 1. !10 (false)
// 2. 3 && 5 (5) 
// 3. false || 5 (5)
console.log(varSomeRes)
console.log(Boolean(varSomeRes))
*/

// Условное ветвление
/*
let varOne = 3.5
let varTwo = 3.5
if(varOne<varTwo){
	console.log(`${varOne} меньше, чем ${varTwo}`)
} else if(varOne===5){
	console.log(`varOne равен 5`)
} else if(varOne>varTwo){
	console.log(`${varOne} больше, чем ${varTwo}`)
} else{
	console.log(`varOne равен varTwo = ${varOne}`)
}
*/

// Оператор уловия ?
/*
let someFeld
let someNewFeld = someFeld ? `Отлично!` : `Заполните поле!`
console.log(someNewFeld)
*/

// Массивы 
/*
let someArray = [27, `Привет!`, `Вика`, true]
console.log(someArray)
console.log(someArray[2])
console.log(someArray.length)

for(let n = 0; n < someArray.length; ++n){
	console.log(n)
	console.log(someArray[n]) 
}
someArray.push(101)
console.log(someArray)
console.log(someArray.includes(10))

if(!someArray.includes(10)){
	someArray.push(10)
}
console.log(someArray)

let someArrayStr = someArray.join(`; `)
console.log(someArrayStr) 
*/

// Функции
/*function showMessage(someText = `Какой-то текст`){
	console.log(someText)
}
showMessage()
function calcMultiply (a=0, b=0){
	const resultMultiply = a * b
	showMessage(resultMultiply)
}
calcMultiply(16, 8)

const multiply = (a, b) => a * b
const result = multiply(5, 7)
console.log(result)

const multiply = (a, b) => {
	const result = a * b
	console.log(result)
	return result
}
multiply(5,7)
*/
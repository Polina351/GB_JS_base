"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и
возвращает полученное значение.
Необходимо продемонстрировать вызов данной функции, с выводом результата,
который получаем от функции, в консоль.
*/

const numberInCube = num => num ** 3;

const number = Number(prompt('Введи число, а я возведу его в куб'));

alert(`${number} в кубе равен ${numberInCube(number)}`);
console.log(`${number} в кубе равен ${numberInCube(number)}`);




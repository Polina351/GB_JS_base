'use strict';

/*
    Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
    найти минимальное число в массиве, решение задание должно состоять из
    одной строки
*/

const minValue = (arr) => Math.min(...arr);

console.log(minValue([1, 5, 7, 9]));

console.log('-----------------');

/*
    Напишите функцию createCounter, которая создает счетчик и
    возвращает объект с двумя методами: increment и decrement. Метод
    increment должен увеличивать значение счетчика на 1, а метод decrement должен
    уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только
    через методы объекта, а не напрямую.
*/

const createCounter = () => {
    let num = 0;
    return {
        increment: () => ++num,
        decrement: () => --num
    }
}

const count = createCounter();
const count2 = createCounter();

console.log(count.increment());
console.log(count.increment());
console.log(count.increment());
console.log(count.decrement());
console.log(count.decrement());
console.log(count.decrement());

/*
    Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
*/
 console.log('----------------------');

function factorialNamer(num) {
    if (num === 1 || num === 0) {
        return 1;
    } else {
        return num * factorialNamer(num - 1);
    }
}

console.log(factorialNamer(5));

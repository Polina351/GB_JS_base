"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения,
три числа. Проверять их не нужно.
*/

const maxNumber = function(num1, num2, num3) {
    let max = num1;
    if (num2 > max) max = num2;
    if (num3 > max) max = num3;

    return max;
}

const num1 = prompt('Введите первое число');
const num2 = prompt('Введите второе число');
const num3 = prompt('Введите третье число');

const result =  maxNumber(num1, num2, num3);

console.log(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${result}.`);
alert(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${result}.`);
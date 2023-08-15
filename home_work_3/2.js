"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию
(нужно будет ее создать), которая будет принимать введенное пользователем
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function deductTax (salary) {
    const ratio = (100 - 13) / 100;
    return salary * ratio;
}

const userSalary = Number(prompt('Введите зарплату, а я заберу с нее налог'));

if (!Number.isFinite(userSalary)) {
    alert('Значение задано неверно');
} else {
    console.log(`Размер заработной платы за вычетом налогов равен ${deductTax(userSalary)}`);
}
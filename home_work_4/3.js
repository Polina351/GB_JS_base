"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

console.log('---------------------');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getArray = function(sizeArray, minValue, maxValue) {
    let array = [];
    for (let i = 0; i < sizeArray; i++) {
        array.push(getRandomInt(minValue, maxValue));
    }
    return array;
};

const getMinValueInArray = (array) => Math.min(...array);

const getSumArrayElems = (array) => array.reduce(function (res, value) {
    return res + value;
});

const arrayOfIndexByValue = function(array, value) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            newArray.push(i);
        }
    }
    return newArray;
};

const array = getArray(5, 0, 9);
console.log(array);
console.log(`Сумма элементов массива равна ${getSumArrayElems(array)}`);
console.log(`Минимальное значение в массиве -  ${getMinValueInArray(array)}`);
console.log('Новый массив, содержащий индексы, в которых значение равно 3:', arrayOfIndexByValue(array, 3));


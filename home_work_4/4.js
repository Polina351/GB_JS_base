"use strict";

/*
Необязательное задание.
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

console.log('---------------------');

function printSlide(height) {
    for (let i = 0; i < 20; i++) {
        let str= '';
        for (let j = 0; j <= i; j++) {
            str += 'x';
        }
        console.log(str);
    }
}

printSlide(20);

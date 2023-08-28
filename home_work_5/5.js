"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru
так, чтобы в объекте ключами выступали значения из массива en, а значениями
объекта являлись значения из массива ru.
*/

console.log('---------------------');

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

function mergeArrays(arrForKey, arrForValue) {
  const object = {};
  for (let i = 0; i < arrForKey.length; i++) {
    object[arrForKey[i]] = arrForValue[i];
  }
  return object;
}

console.log(mergeArrays(en, ru));

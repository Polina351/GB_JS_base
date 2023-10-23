"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [
    {
        title: "Album1",
        artist: "Artist1",
        year: "2021"
    },
    {
        title: "Album2",
        artist: "Artist2",
        year: "2022"
    },
    {
        title: "Album3",
        artist: "Artist3",
        year: "2023"
    },
]

const musicalCollection = {
    albums: albums,
    [Symbol.iterator]: function *() {
        for (const album of this.albums) {
            yield `${album.title} - ${album.artist} (${album.year})`;
        }
    }
}

for (const collectionElement of musicalCollection) {
    console.log(collectionElement);
}
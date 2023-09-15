'use strict';

/*
    Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

    Свойство title (название) - строка, название книги.
    Свойство author (автор) - строка, имя автора книги.
    Свойство pages (количество страниц) - число, количество страниц в книге.
    Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
*/

class Book {
    constructor (title, autor, pages) {
        this.title = title;
        this.autor = autor;
        this.pages = pages;
    }
    displayInfo() {
        console.log(`Название: ${this.title}\nАвтор: ${this.autor}\nКоличество страниц: ${this.pages}`)
    }
}

const book = new Book('Корней Чуковский', 'Доктор Айболит', 56);

book.displayInfo();

/*
    Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

    Свойство name (имя) - строка, имя студента.
    Свойство age (возраст) - число, возраст студента.
    Свойство grade (класс) - строка, класс, в котором учится студент.
    Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
*/
console.log('-------------------------------')

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
        console.log('-----------')
    }
}
const student1 = new Student('John Smith', 16, '10th grade');
const student2 = new Student('Jane Doe', 17, '11th grade');

student1.displayInfo();
student2.displayInfo();
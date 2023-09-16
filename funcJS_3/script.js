'use strict';

/*
    Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

    Свойство name (имя) - строка, имя сотрудника.
    Метод displayInfo() - выводит информацию о сотруднике (имя).
    Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет
    дополнительное свойство и метод:

    Свойство department (отдел) - строка, отдел, в котором работает менеджер.
    Метод displayInfo() - переопределяет метод displayInfo() родительского класса и
    выводит информацию о менеджере (имя и отдел).
*/

class Employee {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo() {
        console.log(`Name: ${this.name}\nDepartment:${this.department}`);
    }
}

const employee = new Employee('John Smith');
employee.displayInfo();
console.log('----------------');
const manager = new Manager('Jane Doe', 'Sales');
manager.displayInfo();

console.log('----------------');
/*
    Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

    Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
    Свойство products (продукты) - массив, содержащий список продуктов в заказе.
    Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
    Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
*/

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getTotalPrice() {
         return this.products.reduce(function(sum, elem) {
            return sum + elem.price;
        }, 0);
    }
}

class Product {
    constructor(name, price) {
    this.name = name;
    this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product('Phone', 500);
order.addProduct(product1);

const product2 = new Product('Headphones', 100);
order.addProduct(product2);

console.log(`Сумма продуктов: ${order.getTotalPrice()}`); //600
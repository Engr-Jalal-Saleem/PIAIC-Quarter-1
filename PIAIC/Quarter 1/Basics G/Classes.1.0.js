"use strict";
/*
Classes:
Theory:
Class Definition: Classes provide a blueprint for creating objects. They encapsulate data and behavior.

Inheritance: Classes can inherit properties and methods from other classes, promoting code reuse.
*/
// Class Definition
class animal {
    constructor(type) {
        this.type = type;
    }
    makeSound() {
        console.log("Animal is making sound");
    }
}
let dog = new animal("dog");
dog.makeSound();
//Inheritance
class Dog extends animal {
    constructor() {
        super("dog");
    }
    makeSound() {
        console.log("Woof");
    }
}
let dog2 = new Dog();
dog2.makeSound();
// Object Instantiation
let mydog = new Dog();
mydog.makeSound();
/*Test Questions:
Create a class Person with properties name (string) and age (number).
Extend the Person class to create a new class Employee with an additional property jobTitle (string).
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
/**
 * Represents an employee who is a person with a job title.
 */
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }
}
let employee = new Employee("Jalal", 25, "Electrical Engineer");
console.log(employee);

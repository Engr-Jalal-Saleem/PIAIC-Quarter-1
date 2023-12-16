"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fruits = ["Apple", "Orange", "Banana", "Mango", "Grapes", "Watermelon", "Strawberry", "Kiwi", "Pineapple"];
// const  fruit1:string[]= fruits.slice(2,5);
// console.log(fruit1);
// console.log(fruits);
fruits.splice(2, 4, "shake", "juice");
console.log(fruits);

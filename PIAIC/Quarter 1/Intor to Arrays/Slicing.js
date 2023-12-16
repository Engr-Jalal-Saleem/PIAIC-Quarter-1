"use strict";
let fruits = ["Apple", "Orange", "Banana", "Mango"];
console.log(fruits);
//slice
let slice1 = fruits.slice(1, 3);
console.log("Slice Method", slice1);
let slice2 = fruits.slice(1);
console.log("Slice Method", slice2);
//Another way to slice
let slice3 = fruits.slice(-3, -1);
console.log("Negative Slicing", slice3);
//splice
let splice1 = fruits.splice(1, 3);
console.log("Splice", splice1);
console.log(fruits);
// //Difference between slice and splice
// let slice4: string[] = fruits.slice(1, 3);
// console.log(slice4);
// let splice2: string[] = fruits.splice(1, 2);
// console.log(splice2);
// console.log(fruits);

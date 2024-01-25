"use strict";
// 13. Filter Even Numbers
// Use the filter method to get an array of even numbers from a given array. Utilize a lambda function as the filtering condition.
Object.defineProperty(exports, "__esModule", { value: true });
let arr1 = [4, 6, 6, 59, 8, 5];
let even_nums = arr1.filter(arr1 => arr1 % 2 === 0);
console.log(even_nums);

"use strict";
// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.-
Object.defineProperty(exports, "__esModule", { value: true });
/* The code is creating an array called `num_arr` with some numbers, including negative numbers. It
then creates an empty array called `updated_arr`. */
let num_arr = [-23, -5, -86, 89, -89];
let updated_arr = [];
for (let index = 0; index <= num_arr.length; index++) {
    if (num_arr[index] >= 0) {
        updated_arr.push(num_arr[index]);
    }
}
console.log(updated_arr);

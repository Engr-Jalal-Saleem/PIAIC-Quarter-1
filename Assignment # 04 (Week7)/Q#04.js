"use strict";
// - Write a program that uses a for loop to print the first 10 even numbers.
/* The code is using a for loop to iterate through numbers from 0 to 20. For each number, it checks if
the number is divisible by 2 (i.e., an even number) using the modulus operator (%). If the number is
even, it prints the number to the console. */
Object.defineProperty(exports, "__esModule", { value: true });
for (let index = 0; index <= 20; index++) {
    if (index % 2 === 0) {
        console.log(index);
    }
}

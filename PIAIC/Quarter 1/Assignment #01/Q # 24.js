"use strict";
/* The code provided is demonstrating various conditional tests in TypeScript. It includes tests for
equality and inequality with strings, tests using the lowercase function, numerical tests involving
equality and inequality, greater than and less than, greater than or equal to, and less than or
equal to, tests using "and" and "or" operators, tests to check if an item is in an array, and tests
to check if an item is not in an array. The code initializes variables with different values and
then performs the tests using console.log statements to display the results. */
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let num1 = 10;
let num2 = 20;
let str1 = "Hello";
let str2 = "World";
let arr1 = ["Hello", "World"];
let arr2 = ["Hello", "World", "Again"];
// • Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings");
console.log(str1 == str2);
console.log(str1 != str2);
// • Tests using the lower case function
console.log("Tests using the lower case function");
console.log(str1.toLowerCase() == str2.toLowerCase());
console.log(str1.toLowerCase() != str2.toLowerCase());
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
console.log("Tests using and and or operators");
console.log(num1 == num2 && str1 == str2);
console.log(num1 == num2 || str1 == str2);
// • Test whether an item is in a array
console.log("Test whether an item is in a array");
console.log(arr1.includes(str1));
console.log(arr1.includes(str2));
// • Test whether an item is not in a array
console.log("Test whether an item is not in a array");
console.log(arr1.includes(str1));
console.log(arr1.includes(str2));

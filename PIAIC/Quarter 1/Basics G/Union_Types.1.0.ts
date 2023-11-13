/*
Union Types:
Theory:
Union Types: Variables can have more than one type, expressed using union types.

Conditional Logic: Union types are often used with conditional statements to handle different types of data.//

*/
let result: number | string;

result = 10;
console.log(result);

result = "Hello";
console.log(result);

/**
 * Divides two numbers and returns the result. If the second number is zero, returns a string error message.
 * @param a The dividend.
 * @param b The divisor.
 * @returns The result of the division, or a string error message if the divisor is zero.
 */
function divide(a: number, b: number): number | string {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    else {
        return a / b;
    }
}

let Status: string | boolean;

console.log(divide(10, 2));
console.log(divide(10, 0));

/*Test Questions:
Declare a variable status that can hold either a string or a boolean value.
Write a function formatInput that takes a parameter which can be either a number or a string and returns a formatted string.
*/

Status = "Success";
console.log(Status);

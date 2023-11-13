/*
Functions:
Theory:
Function Declaration: Functions in TypeScript can have explicit types for parameters and return values.

Optional and Default Parameters: Parameters in functions can be optional or have default values, providing flexibility in function calls.
*/

// Function Declaration
function add(a:number, b:number):number {
    return a + b;
}

console.log(add(10, 20));

function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting} ${name}` : `Hello ${name}`;
}

console.log(greet("Jalal"));
console.log(greet("Jalal", "Hi"));

function exponent(base: number, power: number = 2): number {
    return Math.pow(base, power);
}
console.log(exponent(2, 3));
console.log(exponent(3));

/*Test Questions:
Write a function multiply that takes two parameters and returns their product.
Create a function printInfo that takes a person's name, age, and an optional greeting, and prints a message.
*/

function multiply(x: number, y: number): number {
    return x * y;
}
console.log(multiply(10, 20));

/**
 * Returns a string containing the name and age of a person, with an optional greeting.
 * @param name - The name of the person.
 * @param age - The age of the person.
 * @param greeting - An optional greeting to include in the output string.
 * @returns A string containing the name and age of the person, with an optional greeting.
 */
function printInfo(name:string, age:number, greeting?:string):string {
    return greeting? `${greeting} ${name} ${age}` : `${name} ${age}`;
}
console.log(printInfo("Jalal", 25));
console.log(printInfo("Jalal", 25, "Hi"));


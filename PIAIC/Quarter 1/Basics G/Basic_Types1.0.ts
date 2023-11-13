/*
 Basic Types:
Theory:
Number, String, Boolean: TypeScript includes the standard data types found in JavaScript. These are used to represent numbers, strings, and boolean values.

Array: TypeScript allows you to define arrays with specific element types. This helps catch errors during development.

Tuple: Tuples enable you to express an array where the type of a fixed number of elements is known.
*/

// Number, String, Boolean
let age: number = 25;
let Name: string = "Jalal";
let is_student: boolean = true;
let numbers: number[] = [1, 2, 3, 4, 5];
let person: [string, number] = ["Jalal", 25];

console.log(age);
console.log(Name);
console.log(is_student);
console.log(numbers);
console.log(person);

/*Test Questions:
Declare a boolean variable named isLogged and set it to false.
Create an array of strings called colors with three different color names.
Define a tuple named coordinate with two elements: a number for the x-coordinate and a number for the y-coordinate.
*/

let isLogged: boolean = false;
/**
 * An array of strings representing colors.
 */
let colors: string[] = ["red", "green", "blue"];
let coordinate: [number, number] = [10, 20];

console.log(isLogged);
console.log(colors);
console.log(coordinate);


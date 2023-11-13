/*
 Interfaces:
Theory:
Interface Definition: Interfaces define the structure of an object, specifying the names and types of its properties.

Object with Interface: Objects can implement interfaces to ensure they have the expected structure.
*/
// Interface Definition

/**
 * Represents a person with a name and age.
 * @interface
 */
interface person{
    name: string;
    age : number;
    greeting?: string;
}

// Object with interface
let user: person = {
    name: "Jalal",
    age: 25,
    greeting: "Hi"
};

console.log(user);

/*Test Questions:
Define an interface Car with properties: make (string), model (string), and year (number).
Create an object of type Car with values for each property.
*/
interface car{
    make: string;
    model: string;
    year: number;
}

let myCar: car = {
    make: "Honda",
    model: "Civic",
    year: 2018
};

console.log(myCar);


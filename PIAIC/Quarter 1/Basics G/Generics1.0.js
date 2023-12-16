"use strict";
/*
 Generics:
Theory:
Generic Functions: Functions can be written with generic types to work with a variety of data types.

Generic Classes: Classes can also be generic, providing flexibility when working with different types.
*/
// Generic functions
function identity(arg) {
    return arg;
}
// Generic types
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
/*Test Questions:
Write a generic function reverse that takes an array and returns a new array with its elements in reverse order.
Create a generic class Pair that stores a pair of values of the same type.
*/
function reverse(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}
/**
 * A generic class representing a pair of values of the same type.
 * @template T The type of the values in the pair.
 */
class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    getFirst() {
        return this.first;
    }
    getSecond() {
        return this.second;
    }
}
let pair = new Pair(10, 20);
console.log(pair.getFirst());

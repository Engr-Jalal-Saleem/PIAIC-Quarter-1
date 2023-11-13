/*
 Generics:
Theory:
Generic Functions: Functions can be written with generic types to work with a variety of data types.

Generic Classes: Classes can also be generic, providing flexibility when working with different types.
*/
// Generic functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic types
class Box<T> {
    private value: T;
    constructor(value: T) {
        this.value = value;
    }
    getValue(): T {
        return this.value;
    }
}

/*Test Questions:
Write a generic function reverse that takes an array and returns a new array with its elements in reverse order.
Create a generic class Pair that stores a pair of values of the same type.
*/
function reverse<T>(array: T[]): T[] {
    let newArray: T[] = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

/**
 * A generic class representing a pair of values of the same type.
 * @template T The type of the values in the pair.
 */
class Pair<T> {
    private first: T;
    private second: T;
    constructor(first: T, second: T) {
        this.first = first;
        this.second = second;
    }
    getFirst(): T {
        return this.first;
    }
    getSecond(): T {
        return this.second;
    }
}

let pair: Pair<number> = new Pair<number>(10, 20);
console.log(pair.getFirst());
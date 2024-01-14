"use strict";
/**
 * The make_shirt() function accepts a size and text message, and prints a sentence summarizing the
 * size and message of the shirt.
 * @param {number} size - The size of the shirt, specified as a number.
 * @param {string} text - The text parameter is a string that represents the message that should be
 * printed on the shirt.
 */
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log(`The size of the shirt is ${size} and the message printed on it is ${text}.`);
}
make_shirt(20, "Hello World!");

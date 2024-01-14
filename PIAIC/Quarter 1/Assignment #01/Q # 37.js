"use strict";
/**
 * The make_shirt2 function creates a shirt with a specified size and message, defaulting to a large
 * size and "I love TypeScript!" message.
 * @param {number} size - The size parameter represents the size of the shirt.
 * @param {string} [text=I love TypeScript!] - The text parameter is a string that represents the
 * message printed on the shirt.
 */
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love Python. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt2(size, text = "I love TypeScript!") {
    console.log(`The size of the shirt is ${size} and the message printed on it is ${text}.`);
}
make_shirt2(20);

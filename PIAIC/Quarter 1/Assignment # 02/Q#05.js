"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* The code is checking if the value of the variable `age` is greater than or equal to 18. If it is, it
will print "You are eligible to vote." to the console. Otherwise, it will print "You are not
eligible to vote." to the console. The `export {};` statement at the end is used in TypeScript to
indicate that this file is a module. */
let age = 19;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}

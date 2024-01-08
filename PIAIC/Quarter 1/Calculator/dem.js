"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enquirer_1 = require("enquirer");
// Rest of your code
var inquirer_1 = require("inquirer");
function main() {
    inquirer_1.default;
    (0, enquirer_1.prompt)([
        {
            type: "input",
            name: "num1",
            message: "Enter the first number",
        },
        {
            type: "input",
            name: "num2",
            message: "Enter the second number",
        },
        {
            type: "list",
            name: "operation",
            choices: ["+", "-", "*", "/"],
            message: "Enter Your Operation",
        },
    ])
        .then(function (answers) {
        console.log(answers);
        //   if (operation == "+") {
        //     sum(num1, num2);
        //   } else if (operation == "-") {
        //     subtract(num1, num2);
        //   } else if (operation == "*") {
        //     multiply(num1, num2);
        //   } else if (operation == "/") {
        //     division(num1, num2);
        //   } else {
        //     console.log("Invalid Operation");
        //   }
        // Use user feedback for... whatever!!
    })
        .catch(function (error) {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
        else {
            // Something else went wrong
        }
    });
}
function sum(num1, num2) {
    var result = num1 + num2;
    console.log("Sum", result);
}
function subtract(num1, num2) {
    var result = num1 - num2;
    console.log("Subtraction", result);
}
function multiply(num1, num2) {
    var result = num1 * num2;
    console.log("Multiply", result);
}
function division(num1, num2) {
    var result = num1 / num2;
    console.log("Division", result);
}
main();

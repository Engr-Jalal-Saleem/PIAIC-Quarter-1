#!/usr/bin/env node

// Importing required module
import inquirer from "inquirer";

// Main function to handle user inputs and perform calculations
function main() {
  inquirer
    .prompt([
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
    .then((answers) => {
      const { operation, num1, num2 } = answers;

      // Perform the operation based on user input
      if (operation == "+") {
        sum(Number(num1), Number(num2));
      } else if (operation == "-") {
        subtract(Number(num1), Number(num2));
      } else if (operation == "*") {
        multiply(Number(num1), Number(num2));
      } else if (operation == "/") {
        division(Number(num1), Number(num2));
      } else {
        console.log("Invalid Operation");
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Handle the case when prompt couldn't be rendered in the current environment
      } else {
        // Handle other errors
      }
    });
}

// Function to add two numbers
function sum(num1: number, num2: number) {
  const result = num1 + num2;
  console.log("Sum", result);
}

// Function to subtract two numbers
function subtract(num1: number, num2: number) {
  const result = num1 - num2;
  console.log("Subtraction", result);
}

// Function to multiply two numbers
function multiply(num1: number, num2: number) {
  const result = num1 * num2;
  console.log("Multiply", result);
}

// Function to divide two numbers
function division(num1: number, num2: number) {
  const result = num1 / num2;
  console.log("Division", result);
}

// Call the main function
main();

// Exporting the module
export {};

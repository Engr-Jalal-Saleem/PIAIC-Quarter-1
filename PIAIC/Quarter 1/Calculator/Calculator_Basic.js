/**
 * The function "sum" takes two numbers as input and returns their sum.
 * @param {number} num1 - The first number to be added. In this case, it is 5.
 * @param {number} num2 - The parameter `num2` is a number that is passed into the `sum` function.
 * @returns The sum of 5 and 8, which is 13.
 */
function main() {
    let num1 = 5;
    let num2 = 8;
    let operation = "+";
    if (operation == "+") {
        sum(num1, num2);
    }
    else if (operation == "-") {
        subract(num1, num2);
    }
    else if (operation == "*") {
        multlyply(num1, num2);
    }
    else if (operation == "/") {
        division(num1, num2);
    }
    else {
        console.log("Invalid Operation");
    }
}
function sum(num1, num2) {
    const result = num1 + num2;
    console.log("Sum:", result);
}
function subract(num1, num2) {
    const result = num1 - num2;
    console.log("Substraction", result);
}
function multlyply(num1, num2) {
    const result = num1 * num2;
    console.log("Multiplication:", result);
}
function division(num1, num2) {
    const result = num1 / num2;
    console.log("DIvision:", result);
}
main();
export {};

"use strict";
// - Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.
/**
 * The function `cal_fact` calculates the factorial of a given integer.
 * @param {number} integer - The parameter "integer" in the function "cal_fact" represents the number
 * for which you want to calculate the factorial.
 * @returns The function `cal_fact` returns the factorial of the input number. In this case, it returns
 * the factorial of 5, which is 120.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function cal_fact(integer) {
    let result = 1;
    for (let index = 1; index <= integer; index++) {
        result = result * index;
    }
    return result;
}
console.log(cal_fact(5)); // Output: 120

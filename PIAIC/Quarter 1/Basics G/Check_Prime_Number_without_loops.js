"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPrime(num, divisor) {
    if (divisor === void 0) { divisor = 2; }
    if (num <= 2) {
        return num === 2;
    }
    if (num % divisor === 0) {
        return false;
    }
    if (divisor * divisor > num) {
        return true;
    }
    return isPrime(num, divisor + 1);
}
// Example usage:
var numberToCheck = -2;
var result = isPrime(numberToCheck);
console.log("".concat(numberToCheck, " is ").concat(result ? 'prime' : 'not prime'));

function isPrime(num: number, divisor: number = 2): boolean {
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
const numberToCheck = -2;
const result = isPrime(numberToCheck);
console.log(`${numberToCheck} is ${result ? 'prime' : 'not prime'}`);
export{}
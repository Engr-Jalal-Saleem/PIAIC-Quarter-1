"use strict";
function average(number1) {
    let sum = number1.reduce((a, b) => a + b);
    let average = sum / number1.length;
    console.log(average);
}
average([5, 5, 5]);

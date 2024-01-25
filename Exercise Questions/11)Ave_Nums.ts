function average(number1:number[]) {
    let sum = number1.reduce((a, b) => a + b);
    let average = sum / number1.length;
    console.log(average)
}
average([5,5,5])
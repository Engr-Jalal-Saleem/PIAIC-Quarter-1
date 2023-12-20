// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.

/* The code is implementing a program that takes a list of temperatures in Celsius as input from the
user. It then converts each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and
stores the converted temperatures in an array called `Fahrenheit_temp_readings`. */

let Celsius_temp_readings:number[]=[35,89,52,45.2]
let Fahrenheit_temp_readings:number[]=[]


for (let index = 0; index < Celsius_temp_readings.length; index++) {
    const element = Celsius_temp_readings[index];
    let Fahrenheit = (element*9/5)+32;
    console.log(Fahrenheit)
    Fahrenheit_temp_readings.push(Fahrenheit)
}
console.log(Fahrenheit_temp_readings)

"use strict";
/**
 * The function `createCar` stores information about a car in an object and accepts additional
 * name-value pairs as arguments.
 * @param {string} manufacturer - The manufacturer of the car, in this case "Toyota".
 * @param {string} modelName - The model name of the car.
 * @param {Record<string, any>[]} additionalInfo - The `additionalInfo` parameter is a rest parameter
 * that allows the function to accept an arbitrary number of keyword arguments. It is an array of
 * objects, where each object represents a name-value pair for additional information about the car.
 * @returns The function `createCar` returns an object that contains information about a car, including
 * the manufacturer, model name, and any additional information provided as keyword arguments.
 */
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Function to store information about a car
function createCar(manufacturer, modelName, ...additionalInfo) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Add additional information from keyword arguments
    additionalInfo.forEach((info) => {
        for (const key in info) {
            if (info.hasOwnProperty(key)) {
                car[key] = info[key];
            }
        }
    });
    return car;
}
// Call the function with required information and additional name-value pairs
const carInfo = createCar("Toyota", "Camry", {
    color: "Blue",
    year: 2022,
    optionalFeature: "Sunroof",
});
// Print the returned Object
console.log("Car Information:", carInfo);

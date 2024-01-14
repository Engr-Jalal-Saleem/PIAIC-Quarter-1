"use strict";
/* The code is an example of TypeScript code that demonstrates how to store a list of favorite pizza
names in an array and use a for loop to print the name of each pizza. */
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
Object.defineProperty(exports, "__esModule", { value: true });
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// List of favorite pizzas
const favoritePizzas = ["Margherita", "Pepperoni", "Vegetarian"];
// Print the name of each pizza
console.log("My favorite pizzas:");
for (let index = 0; index < favoritePizzas.length; index++) {
    const pizzaName = favoritePizzas[index];
    console.log(pizzaName);
}
// Print a sentence for each pizza
console.log("\nStatements about my favorite pizzas:");
for (let index = 0; index < favoritePizzas.length; index++) {
    const pizzaName = favoritePizzas[index];
    console.log("I like " + pizzaName + " pizza.");
}
// Additional sentence about liking pizza
console.log("\nI really love pizza!");

"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
// Function to create a sandwich
function orderSandwich(...ingredients) {
    console.log("Sandwich Order:");
    // Check if any ingredients are provided
    if (ingredients.length === 0) {
        console.log("You ordered an empty sandwich. Please add some ingredients!");
    }
    else {
        console.log("Ingredients:");
        for (let index = 0; index < ingredients.length; index++) {
            console.log("- " + ingredients[index]);
        }
        console.log("Enjoy your sandwich!");
    }
    // Add a newline for better separation in the console
    console.log("\n");
}
// Call the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss Cheese");
orderSandwich();

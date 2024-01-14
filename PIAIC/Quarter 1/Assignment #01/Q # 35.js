"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* The code is creating a list of three animals (cat, dog, and rabbit) and using a for loop to print
out the name of each animal. It then modifies the program to print a statement about each animal,
such as "A dog would make a great pet." Finally, it adds a line at the end of the program stating
that all of these animals are mammals. */
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet.
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["cat", "dog", "rabbit"];
console.log("My favorite animals:");
for (let index = 0; index < animals.length; index++) {
    const element = animals[index];
    console.log(`${index + 1})`, element);
}
console.log("\nStatements about my favorite animals:");
for (let index = 0; index < animals.length; index++) {
    const element = animals[index];
    console.log(`${index + 1})`, element, "would make a great pet.");
}
//writting about the common characteristic of the animals
console.log("\nAll of these animals are mammals.");

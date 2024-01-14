"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians = ["David Copperfield", "David Blaine", "Criss Angel"];
function showMagicians(magicians) {
    for (let index = 0; index < magicians.length; index++) {
        const element = magicians[index];
        console.log(element);
    }
}
function makeGreat(copyMagicians) {
    let greatMagicians = [];
    for (let index = 0; index < copyMagicians.length; index++) {
        const element = copyMagicians[index];
        greatMagicians.push("Great " + element);
    }
    return greatMagicians;
}
// Call makeGreat with a copy of the original array
let greatMagicians = makeGreat([...magicians]);
// Call showMagicians with the original array
console.log("Original Magicians:");
showMagicians(magicians);
// Call showMagicians with the new array containing "Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);

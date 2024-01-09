"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Store a person's name with leading and trailing whitespace
const personName = "\t   Engr. Jalal Saleem\n";
// Print the name with whitespace
console.log("Original Name:");
console.log(JSON.stringify(personName)); // JSON.stringify to display whitespace characters
// Strip whitespace from the name
const strippedName = personName.trim();
// Print the stripped name
console.log("\nStripped Name:");
console.log(JSON.stringify(strippedName));

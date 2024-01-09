"use strict";
/* This code is determining a person's stage of life based on their age. It sets a value for the
variable `age` and then uses an if-else chain to check the age and print the corresponding message
for each stage of life. The code checks if the person is a baby, toddler, kid, teenager, adult, or
elder based on the age range. Finally, it exports an empty object to indicate the end of the code. */
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
Object.defineProperty(exports, "__esModule", { value: true });
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age = 19;
if (age < 2) {
    console.log("The person is a baby.");
}
if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
if (age >= 65) {
    console.log("The person is an elder.");
}

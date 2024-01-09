"use strict";
/* The code is creating an array called `usernames` which contains five or more usernames, including
the name 'admin'. It then loops through the array and prints a greeting to each user based on their
username. */
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
Object.defineProperty(exports, "__esModule", { value: true });
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = [
    "admin",
    "Developer",
    "Accountant",
    "Marketer",
    "Designer",
];
for (let index = 0; index < usernames.length; index++) {
    const element = usernames[index];
    if (usernames[index] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + usernames[index] + ", thank you for logging in again.");
    }
}

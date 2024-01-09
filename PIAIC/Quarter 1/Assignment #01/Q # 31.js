"use strict";
/* The code snippet is checking if the list of users is empty or not. If the list is empty, it prints
the message "We need to find some users!". Otherwise, it iterates over the list of users and prints
a greeting message for each user. The code also exports an empty object to ensure the code is
treated as a module. */
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let users = ["User1", "User2", "User3"];
// Check if the array is empty
if (users.length == 0) {
    console.log("We need to find some users!");
}
else {
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        console.log("Hello " + users[index] + ", thank you for logging in again.");
    }
}
// Remove all usernames from the array
users = [];
// Check again if the array is empty
if (users.length == 0) {
    console.log("We need to find some users!");
}

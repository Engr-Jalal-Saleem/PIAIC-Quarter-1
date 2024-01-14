"use strict";
/* The code is checking if the usernames in the `new_users` list have already been used by comparing
them with the usernames in the `current_users` list. It is also making sure that the comparison is
case insensitive. If a username in `new_users` has already been used, it prints a message saying
that the person will need to enter a new username. If a username has not been used, it prints a
message saying that the username is available. */
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["ali", "ahmed", "kamran", "fahad", "shahid"];
let new_users = ["kamran", "umer", "shahid", "umer", "usama"];
let current_users_lower = current_users.map((user) => user.toLowerCase());
let new_users_lower = new_users.map((user) => user.toLowerCase());
let current_users_upper = current_users.map((user) => user.toUpperCase());
let new_users_upper = new_users.map((user) => user.toUpperCase());
console.log(current_users_lower);
console.log(new_users_lower);
console.log(current_users_upper);
console.log(new_users_upper);
// for (let index = 0; index < current_users.length; index++) {
//     const element = current_users[index];
//     if (current_users[index] === new_users[index]) {
//         console.log("The username " + new_users[index] + " is already taken. Please enter a new username.");
//     }else{
//         console.log("The username " + new_users[index] + " is available.");
//     }
// }
for (let index = 0; index < current_users_lower.length; index++) {
    const element = current_users_lower[index];
    if (current_users_lower[index] === new_users_lower[index]) {
        console.log("The username " +
            new_users_lower[index] +
            " is already taken. Please enter a new username.");
    }
    else {
        console.log("The username " + new_users_lower[index] + " is available.");
    }
}

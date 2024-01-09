"use strict";
/* The code is an implementation of a program that manages a guest list for a dinner. It starts with an
initial list of guest names. The program then removes guests from the list one at a time until only
two names remain. Each time a guest is removed, a message is printed to inform them that they are
not invited to dinner. After that, a message is printed to the two remaining guests to let them know
they are still invited. Finally, the program empties the guest list and prints it to confirm that it
is empty. */
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guest_name = [
    "Adeel",
    "Afzaal",
    "Umer",
    "Qasim",
    "ali",
    "Kashif",
    "Ahsan",
    "Azeem",
];
console.log("Original guest list:", guest_name);
while (guest_name.length > 2) {
    let removed_guest = guest_name.shift(); // Remove the first guest from the list
    console.log(`Hello ${removed_guest}!\nYou are not invited to come on dinner.\nThank You`);
}
console.log("Remaining guest list:", guest_name);
for (let index = 0; index < guest_name.length; index++) {
    console.log(`Hello ${guest_name[index]}!\nI invited you to come on dinner.\nThank You`);
}
// Empty the list
guest_name.length = 0;
console.log("Final guest list:", guest_name); // Should be an empty list

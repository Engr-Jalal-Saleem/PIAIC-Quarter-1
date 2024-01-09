"use strict";
/* The code is written in TypeScript and it represents a program that handles a dinner invitation list. */
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.
let guest_name = [
    "Afzaal",
    "Umer",
    "ali",
    "Kashif",
    "Ahsan",
    "Azeem",
];
console.log(guest_name);
guest_name.unshift("Adeel");
console.log(guest_name);
console.log(guest_name.length);
guest_name.splice(3, 0, "Qasim");
console.log(guest_name);
for (let index = 0; index < guest_name.length; index++) {
    const element = guest_name[index];
    console.log(`Hello ${guest_name[index]}!\nI invited you to come on dinner.\nThank You`);
}

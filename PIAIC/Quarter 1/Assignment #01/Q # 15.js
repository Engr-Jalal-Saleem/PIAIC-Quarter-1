"use strict";
/* The code is an example of how to change a guest list for a dinner event. It starts by declaring an
array called `guest_name` with the names of the guests. Then, it uses a `for` loop to iterate over
the `guest_name` array and print a message for each guest, inviting them to the dinner. */
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
let guest_name = ["Afzaal", "Umer", "ali", "Kashif", "Ahsan", "Azeem"];
console.log(guest_name);
for (let index = 0; index < guest_name.length; index++) {
    const element = guest_name[index];
    console.log(`Hello ${guest_name[index]}!\nI invited you to come on dinner.\nThank You`);
}
//Now, one of our guest can't come on dinner
let new_guest_list = guest_name.splice(2, 1);
console.log(guest_name);
for (let index = 0; index < guest_name.length; index++) {
    const element = guest_name[index];
    console.log(`Hello ${guest_name[index]}!\nI invited you to come on dinner.\nThank You`);
}

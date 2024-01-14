"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["David Copperfield", "David Blaine", "Criss Angel"];
function show_magicians(magicians) {
    for (let index = 0; index < magicians.length; index++) {
        const element = magicians[index];
        console.log(element);
    }
}
show_magicians(magicians);

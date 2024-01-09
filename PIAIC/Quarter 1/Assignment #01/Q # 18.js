"use strict";
/* The code is creating an array called `places` that stores the names of five places in the world. The
array is initially not in alphabetical order. */
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
Object.defineProperty(exports, "__esModule", { value: true });
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let places = [
    "Paris",
    "Dubai",
    "London",
    "New York",
    "Venice",
    "Switzerland",
];
console.log("My Favourite places:", places);
places.sort();
console.log("My Favourite places in alphabetical order:", places);
places.reverse();
console.log("My Favourite places in reverse order:", places);
console.log(places);
places.reverse();
console.log("My Favourite places in original order:", places);
places.sort();
console.log("My Favourite places in alphabetical order:", places);
console.log(places);

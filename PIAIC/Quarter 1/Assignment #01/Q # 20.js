"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* The code is creating arrays for different categories such as mountains, rivers, countries, cities,
and languages. Each array contains a list of items related to that category. After defining the
arrays, the code uses for loops to iterate over each array and print out each element in the
console. This allows you to see the items in each category. */
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let mountains = [
    "K2",
    "Mount Everest",
    "Nanga Parbat",
    "Himalaya",
    "Karakoram",
    "Hindu Kush",
    "Pamir",
    "Koh-e-Sufaid",
    "Koh-e-Qaf",
    "Koh-e-Baba",
];
let rivers = [
    "Indus",
    "Nile",
    "Amazon",
    "Yangtze",
    "Yellow River",
    "Mekong",
    "Congo",
    "Amur",
    "Lena",
    "Niger",
];
let countries = [
    "Pakistan",
    "Egypt",
    "China",
    "India",
    "Indonesia",
    "Brazil",
    "Mexico",
    "Japan",
    "Ethiopia",
    "Philippines",
];
let cities = [
    "Karachi",
    "Cairo",
    "Beijing",
    "Mumbai",
    "Dhaka",
    "Osaka",
    "New York",
    "Tokyo",
    "Istanbul",
    "Chongqing",
];
let languages = [
    "Urdu",
    "Arabic",
    "Chinese",
    "English",
    "Hindi",
    "Spanish",
    "Bengali",
    "Portuguese",
    "Russian",
    "Japanese",
];
// Once you’ve defined the list, print each element of the list using a for loop.
console.log("Mountains:");
for (let i = 0; i < mountains.length; i++) {
    const element = mountains[i];
    console.log(`${i + 1}`, element);
}
console.log("Rivers:");
for (let index = 0; index < rivers.length; index++) {
    const element = rivers[index];
    console.log(`${index + 1}`, element);
}
console.log("Countries:");
for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    console.log(`${index + 1}`, element);
}
console.log("Cities:");
for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    console.log(`${index + 1}`, element);
}
console.log("Languages:");
for (let index = 0; index < languages.length; index++) {
    const element = languages[index];
    console.log(`${index + 1}`, element);
}

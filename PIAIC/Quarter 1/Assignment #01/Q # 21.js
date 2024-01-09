"use strict";
/* The code creates two TypeScript objects, `Person_info` and `Person_info2`, which store information
about a person. Each object has properties such as `name`, `age`, `profession`, `hobbies`, and
`languages`. */
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
const Person_info = {
    name: "Engr. Jalal Saleem",
    age: 19,
    profession: "Electrical Engineer",
    hobbies: [
        "Coding",
        "Reading",
        "Listening",
        "Writting",
        "Gaming",
        "Travelling",
        "Music",
    ],
    languages: [
        "English",
        "Chinese",
        "Arabic",
        "Urdu",
        "Punjabi",
        "Saraiki",
        "Hindi",
    ],
};
console.log(Person_info);
console.log("Name:", Person_info.name);
console.log("Age:", Person_info.age);
console.log("Profession:", Person_info.profession);
console.log("Hobbies:");
for (let index = 0; index < Person_info.hobbies.length; index++) {
    const element = Person_info.hobbies[index];
    console.log(`${index + 1}`, element);
}
console.log("Languages:");
for (let index = 0; index < Person_info.languages.length; index++) {
    const element = Person_info.languages[index];
    console.log(`${index + 1}`, element);
}
const Person_info2 = {
    name: "Ali",
    age: 19,
    profession: "Electrical Engineer",
    hobbies: [
        "Coding",
        "Reading",
        "Listening",
        "Writting",
        "Gaming",
        "Travelling",
        "Music",
    ],
    languages: ["English", "Urdu", "Punjabi", "Saraiki", "Hindi"],
};
console.log(Person_info2);

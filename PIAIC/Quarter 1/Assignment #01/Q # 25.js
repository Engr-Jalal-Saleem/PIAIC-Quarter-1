"use strict";
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
Object.defineProperty(exports, "__esModule", { value: true });
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color = "green";
if (alien_color == "green") {
    console.log("The player just earned 5 points.");
}
else {
    console.log("The player just earned 0 points.");
}
//Another Approach where I use a function to generate a random color and then compare it with the player's guess
let alien_colors = ["green", "yellow", "red"];
function guessAlienColor(player_guess) {
    // Select a random color from the array
    let alien_color = alien_colors[Math.floor(Math.random() * alien_colors.length)];
    // Check the player's guess against the alien's color
    if (player_guess == alien_color) {
        console.log("Correct! The player just earned 5 points.");
    }
    else {
        console.log(`Sorry, the correct color was ${alien_color}. The player just earned 0 points.`);
    }
}
// Now you can call the function with the player's guess
guessAlienColor("green");

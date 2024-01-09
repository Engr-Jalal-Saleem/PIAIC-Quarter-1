"use strict";
/* The code is checking the value of the variable `alien_color`, `alien_color1`, and `alien_color2` and
printing a message based on the color of the alien. If the alien is green, it prints "The player
just earned 5 points." If the alien is yellow, it prints "The player just earned 10 points." If the
alien is red, it prints "The player just earned 15 points." If the color is not green, yellow, or
red, it prints "Invalid Color". */
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_color = "green";
if (alien_color == "green") {
    console.log("The player just earned 5 points.");
}
let alien_color1 = "yellow";
if (alien_color1 == "yellow") {
    console.log("The player just earned 10 points.");
}
let alien_color2 = "red";
if (alien_color2 == "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("Invalid Color");
}

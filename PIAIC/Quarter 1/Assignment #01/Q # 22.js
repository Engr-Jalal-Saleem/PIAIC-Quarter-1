"use strict";
/* The comment `// Intentional Error: If you haven’t received an array index error in one of your
programs yet, try to make one happen. Change an index in one of your programs to produce an index
error. Make sure you correct the error before closing the program.` is instructing the programmer to
intentionally create an array index error by accessing an index that is out of bounds in the
`mountains` array. The error is then corrected by accessing a valid index in the array. */
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
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
// This will create an Array Index Error
console.log(mountains[10]);
// This will not create an Array Index Error
console.log(mountains[9]);

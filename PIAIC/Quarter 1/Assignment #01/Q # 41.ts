// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians = ["David Copperfield", "David Blaine", "Criss Angel"];
function show_magicians(magicians: string[]) {
  for (let index = 0; index < magicians.length; index++) {
    const element = magicians[index];
    console.log(element);
  }
}

show_magicians(magicians);
export {};
/*
An easier way to do it
let length: number = 5;
let width: number = 6;
let height: number = 7;

let area_cube: number = length * width * height;
console.log(area_cube);
*/


/**
 * The function calculates the volume of a cube given its length, width, and height.
 * @param {number} length - The length of the cube.
 * @param {number} width - The width of the cube.
 * @param {number} height - The height of the cube.
 */
function area_cube(length:number, width:number, height:number) {
    let area_cube: number = length * width * height;
    console.log(area_cube);
}

area_cube(5,56,8);
export {};
/**
 * The `area_rect` function calculates the area of a rectangle given its length and width.
 * @param {number} length - 5
 * @param {number} width - 6
 * @returns The function `area_rect(5,6)` is returning the area of the rectangle, which is 30.
 */
function area_rect(length: number, width: number): number {
    let area: number = length * width;
    return area;
}
/* The `area_rect(5,6);` function call is calculating the area of a rectangle with a length of 5 units
and a width of 6 units. */
console.log(area_rect(5, 6));

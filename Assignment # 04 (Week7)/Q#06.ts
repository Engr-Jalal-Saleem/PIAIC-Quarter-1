// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.-

/* The code is creating an array called `num_arr` with some numbers, including negative numbers. It
then creates an empty array called `updated_arr`. */
let num_arr: number[] = [-23, -5, -86, 89, -89];
let updated_arr: number[] = [];
for (let index = 0; index <= num_arr.length; index++) {
  if (num_arr[index] >= 0) {
    updated_arr.push(num_arr[index]);
  }
}
console.log(updated_arr);

/* The code is using the `filter` method on the `num_arr` array to create a new array called
`updated_arr`. The `filter` method takes a callback function as an argument, which is used to
determine whether each element in the array should be included in the new array and msut be greater than 0. */

// let updated_arr:number[] = num_arr.filter(num => num >= 0);
// console.log(updated_arr);

export {};

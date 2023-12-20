// - Write a program that uses a for loop to print the first 25 integers.
/* The code is using a for loop to print the first 25 integers. It initializes a variable `index` to 0,
and then loops as long as `index` is less than 26. In each iteration, it assigns the value of
`index` to a constant variable `element`, and then prints the value of `element` to the console.
Finally, it increments `index` by 1 in each iteration. */

for (let index = 0; index < 26; index++) {
  const element = index;
  console.log(element);
}

export {};

/* The code is checking whether a given number is even or odd. It declares a variable `a` and assigns
it the value `25`. Then, it declares a variable `c` and assigns it the
remainder of `a` divided by 2. If the value of `c` is equal to 0, it prints "even" to the console.
Otherwise, it prints "Odd" to the console. The `export {};` statement at the end is used in
TypeScript to indicate that the file is a module. */
let a: number = 25;
let c: number = a % 2;
if (c == 0) {
  console.log("even");
} else {
  console.log("Odd");
}

export {};

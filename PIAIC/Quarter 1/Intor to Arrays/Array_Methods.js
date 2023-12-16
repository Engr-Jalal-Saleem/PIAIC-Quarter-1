"use strict";
//There are some methods that we can use with arrays
//1. push() - adds an element to the end of the array
//2. pop() - removes the last element from the array
//3. shift() - removes the first element from the array
//4. unshift() - adds an element to the beginning of the array
//5. indexOf() - returns the index of the element in the array
//6. lastIndexOf() - returns the last index of the element in the array
//7. includes() - returns true if the element is present in the array
//8. join() - joins all the elements of the array into a string
//9. toString() - converts the array into a string
//10. concat() - joins two arrays
//11. reverse() - reverses the array
//12. sort() - sorts the array
//13. fill() - fills the array with a static value
//14. filter() - returns a new array with the elements that pass the condition
//15. map() - returns a new array with the result of the function
//16. reduce() - returns a single value
//17. every() - returns true if all the elements pass the condition
//18. some() - returns true if at least one element passes the condition
//19. forEach() - calls a function for each element
//20. find() - returns the value of the first element that passes the condition
//21. findIndex() - returns the index of the first element that passes the condition
//22. slice() - returns a new array with the sliced elements
//23. splice() - adds/removes elements from the array
//24. length - returns the length of the array
//25. delete - deletes an element from the array
//26. isArray() - returns true if the object is an array
//27. from() - creates an array from an object
//28. of() - creates an array from the arguments passed
//29. copyWithin() - copies the elements to another position in the array
//30. entries() - returns an array iterator object
//31. keys() - returns an array iterator object with the keys of the array
//32. values() - returns an array iterator object with the values of the array
//33. includes() - returns true if the array contains the element
//34. flat() - creates a new array with the sub arrays concatenated
//35. flatMap() - creates a new array with the result of the function
//36. lastIndexOf() - returns the last index of the element
//37. reduceRight() - applies a function from right to left
//38. toLocaleString() - returns a string representing the elements of the array
//39. toSource() - returns the source code of the array
//40. [@@iterator]() - returns an array iterator object
Object.defineProperty(exports, "__esModule", { value: true });
//1. push() - adds an element to the end of the array
//Tells us the length of the array
let fruits = ["Apple", "Orange", "Banana", "Mango", "Grapes", "Watermelon", "Strawberry", "Kiwi", "Pineapple"];
console.log("Fruits:", fruits);
let push1 = fruits.push("Papaya");
console.log("Push Method", push1);
//2. pop() - removes the last element from the array
console.log("Removed Item:", fruits.pop());
console.log("Pop Method", fruits);
//3. shift() - removes the first element from the array
console.log("Removed Item:", fruits.shift());
console.log("Shift Method", fruits);
//4. unshift() - adds an element to the beginning of the array
console.log("Unshift Method", fruits.unshift("Apple"));
console.log("Unshift Method", fruits);
//5. indexOf() - returns the index of the element in the array
console.log("Index of Method", fruits.indexOf("Banana"));
//6. lastIndexOf() - returns the last index of the element in the array
console.log("Last Index of Method", fruits.lastIndexOf("Apple"));
//7. includes() - returns true if the element is present in the array
console.log("Includes Method", fruits.includes("Orange"));
//8. join() - joins all the elements of the array into a string
console.log("Join Method", fruits.join());
//9. toString() - converts the array into a string
console.log("To String Method", fruits.toString());
//10. concat() - joins two arrays
let fruits2 = ["Guava", "Pomegranate", "Cherry"];
console.log("Concat Method", fruits.concat(fruits2));
//11. reverse() - reverses the array
console.log("Reverse Method", fruits.reverse());
//12. sort() - sorts the array
console.log("Sort Method", fruits.sort());
//13. fill() - fills the array with a static value
console.log("Fill Method", fruits.fill("Apple"));
//14. filter() - returns a new array with the elements that pass the condition
console.log("Filter Method", fruits.filter(fruit => fruit.length > 6));
//15. map() - returns a new array with the result of the function
console.log("Map Method", fruits.map(fruit => fruit.toUpperCase()));
//16. reduce() - returns a single value
console.log("Reduce Method", fruits.reduce((accumulator, currentValue) => accumulator + currentValue));
//17. every() - returns true if all the elements pass the condition
console.log("Every Method", fruits.every(fruit => fruit.length > 6));
//18. some() - returns true if at least one element passes the condition
console.log("Some Method", fruits.some(fruit => fruit.length > 6));
//19. forEach() - calls a function for each element
console.log("For Each Method");
fruits.forEach(fruit => console.log(fruit));
//20. find() - returns the value of the first element that passes the condition
console.log("Find Method", fruits.find(fruit => fruit.length > 6));
//21. findIndex() - returns the index of the first element that passes the condition
console.log("Find Index Method", fruits.findIndex(fruit => fruit.length > 6));
//22. slice() - returns a new array with the sliced elements
console.log("Slice Method", fruits.slice(1, 3));
//23. splice() - adds/removes elements from the array
console.log("Splice Method", fruits.splice(1, 3));
//24. length - returns the length of the array
console.log("Length Method", fruits.length);
//25. delete - deletes an element from the array
delete fruits[1];
console.log("Delete Method", fruits);
//26. isArray() - returns true if the object is an array
console.log("Is Array Method", Array.isArray(fruits));
//27. from() - creates an array from an object
let fruits3 = Array.from("Apple");
console.log("From Method", fruits3);
//28. of() - creates an array from the arguments passed
let fruits4 = Array.of("Apple", "Orange", "Banana", "Mango");
console.log("Of Method", fruits4);
//29. copyWithin() - copies the elements to another position in the array
console.log("Copy Within Method", fruits.copyWithin(1, 2));
//30. entries() - returns an array iterator object
console.log("Entries Method", fruits.entries());
//31. keys() - returns an array iterator object with the keys of the array
console.log("Keys Method", fruits.keys());
//32. values() - returns an array iterator object with the values of the array
console.log("Values Method", fruits.values());
//33. includes() - returns true if the array contains the element
console.log("Includes Method", fruits.includes("Apple"));
//34. flat() - creates a new array with the sub arrays concatenated
//Due to ecmaScript version 6, this method is not supported
// let fruits5 = ["Apple", ["Orange", "Banana"], "Mango"];
// console.log("Flat Method", fruits5.flat());
//35. flatMap() - creates a new array with the result of the function
//Due to ecmaScript version 6, this method is not supported
//console.log("Flat Map Method", fruits.flatMap(fruit => fruit.toUpperCase()));
//36. lastIndexOf() - returns the last index of the element
console.log("Last Index Of Method", fruits.lastIndexOf("Apple"));
//37. reduceRight() - applies a function from right to left
console.log("Reduce Right Method", fruits.reduceRight((accumulator, currentValue) => accumulator + currentValue));
//38. toLocaleString() - returns a string representing the elements of the array
console.log("To Locale String Method", fruits.toLocaleString());
//39. toSource() - returns the source code of the array
// Due to ecmaScript version 6, this method is not supported
//console.log("To Source Method", fruits.toSource());
//40. [@@iterator]() - returns an array iterator object
console.log("Iterator Method", fruits[Symbol.iterator]());

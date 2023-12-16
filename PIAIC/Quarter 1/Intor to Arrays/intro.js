"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let list1 = [1, 2, 3, 4, 5];
console.log(list1);
let list2 = [1, 2, 3, 4, 5];
console.log(list2);
// let sum :number[] =list1+list2;
/* The expression `list1+list2` is attempting to concatenate the two arrays `list1`
and `list2`. However, in TypeScript, the `+` operator is not defined for arrays,
so this operation will result in an error. */
// console.log(sum);
//sum two arrays
let sum = [];
for (let i = 0; i < list1.length; i++) {
    sum.push(list1[i] + list2[i]);
}
console.log(sum);
//sum of two arrays using map
let sum1 = list1.map((num, index) => num + list2[index]);
console.log(sum1);

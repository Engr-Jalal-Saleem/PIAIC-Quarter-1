"use strict";
// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
Object.defineProperty(exports, "__esModule", { value: true });
let shopping_cart = [];
function add_item(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
function remove_item(array, index) {
    array.splice(index, 1);
    return array;
}
function update_quantity(array, index, value) {
    array.splice(index, 1, value);
    return array;
}
let add_item_arr = add_item(["Banana", "Orange", "Apple", "Mango"], 2, "Kiwi");
console.log(`Added Items are :${add_item_arr}`);

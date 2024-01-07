let shopping_cart:string[]=[];

function add_item(array:string[], index:number, value:string) {
    array.splice(index, 0, value);
    return array;
}

function remove_item(array:string[], index:number) {
    array.splice(index, 1);
    return array;
}

function update_quantity(array:string[], index:number, value:string) {
    array.splice(index, 1, value);
    return array;
}

// Adding an item
let add_item_arr = add_item(["Banana", "Orange", "Apple", "Mango"], 2, "Kiwi");
console.log(`Added Items are :${add_item_arr}`);

// Removing an item
let removed_item_arr = remove_item(add_item_arr, 1);
console.log(`Items after removal: ${removed_item_arr}`);

// Updating an item
let updated_item_arr = update_quantity(removed_item_arr, 0, "Strawberry");
console.log(`Items after update: ${updated_item_arr}`);

export {}
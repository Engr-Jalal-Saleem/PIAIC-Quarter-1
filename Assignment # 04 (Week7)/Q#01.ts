// - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

function insert_array(array:string[], index:number, value:string) {
    array.splice(index, 0, value);
    return array;
}
let mod_array = insert_array(["Banana", "Orange", "Apple", "Mango"], 2, "Kiwi");
console.log(mod_array);
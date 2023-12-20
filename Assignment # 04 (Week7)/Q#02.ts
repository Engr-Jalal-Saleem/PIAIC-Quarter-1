// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

let shopping_cart:string[]=[];
function add_item(array:string[],index:number,value:string) {
    array.splice(index,0,value);
    return array;
}


function remove_item(array:string[],index:number) {
    array.splice(index,1);
    return array;
}

function update_quantity(array:string[],index:number,value:string) {
    array.splice(index,1,value);
    return array;
}





let add_item_arr = add_item(["Banana", "Orange", "Apple", "Mango"], 2, "Kiwi");
console.log(`Added Items are :${add_item_arr}`);




export{}
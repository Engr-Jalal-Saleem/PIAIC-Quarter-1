function insert_array(array:string[], index:number, value:string) {
    array.splice(index, 0, value);
    return array;
}
console.log(insert_array(["Banana", "Orange", "Apple", "Mango"], 2, "Kiwi"));
export{}
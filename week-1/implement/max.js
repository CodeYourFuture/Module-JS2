function findMaximumNumber(list) {
    if (list.length === 0) {
        return "Infinity";
    }
    if (list.length === 1) {
        return list[0];
    }

    let max = 0; //[10, 20,"@", 5,"b" ,80]
    for (let item of list) {
       if (item > max && typeof(item)==="number" ) { //typeOf(5)// output "number"
            max = item;
        }
    }
    return max;
}

module.exports = findMaximumNumber;
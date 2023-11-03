function findMaximumNumber(list) {
    if (list.length === 0) {
        return "Infinity";
    }
    if (list.length === 1) {
        return Number(list);
    }
    let max = 0;
    for (let item of list) {
       if (item > max && typeof(item)==="number") {
            max = item;
        }
    }
    return max;
}


module.exports = findMaximumNumber;
function findMax(array) {
    if (array.length === 0) {
        return "infinity";
    }
    if(array.length === 1) {
        return array[0];
    }

    let max = 0;
    for (let item of array) {
        if (item > max && typeof(item) === "number") {
            max = item;
        }
    }
    return max;
}

module.exports = findMax;
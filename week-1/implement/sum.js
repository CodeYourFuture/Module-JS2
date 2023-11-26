function calculateSum(array) {
    if (array.length === 0) {
        return 0;
    }
    if (array.length === 1) {
        return Number(array);
    }
    let sum = 0;
    for (let item of array) {
        if (typeof (item) === "number") {
            sum += item;
        }
    }
    return sum;
}

module.exports = calculateSum;
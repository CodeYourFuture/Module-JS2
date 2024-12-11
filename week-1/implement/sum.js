function findTheSum(list) {
    if (list.length === 0) {
        return 0;
    }
    if (list.length === 1) {
        return Number(list);
    }
    let sum = 0;
    for (let item of list) {
        if (typeof (item) === "number") {
            sum += item;
        }
    }
    return sum;
}

module.exports = findTheSum;
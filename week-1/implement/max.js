function findMaximumNumber(list) {
    if (list.length === 0) {
        return "Infinity";
    }
    if (list.length === 1) {
        return Number(list);
    }
    let max = 0;
    for (let i = 0; i < list.length; i++) {

       if (list[i] > max && typeof(list[i])==="number") {
            max = list[i];
        }
    }
    return max;
}


module.exports = findMaximumNumber;
function tally(array) {
    let object = {};
    if (array.length == 0) {
        return {};
    }
    if (typeof (array) === "string") {
        return "Error, not a valid type";
    }
    for (const item of array) {
        if (object[item]) {
            object[item] += 1;
        } else {
            object[item] = 1;
        }
    }
    return object;
}

module.exports = tally;
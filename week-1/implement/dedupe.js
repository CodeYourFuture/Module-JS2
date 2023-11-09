function dedupe(array) {
    let newArray = [];
    if (array.length > 0) {
        for (let item of array) {
            if (!newArray.includes(item)) {
                newArray.push(item);
            }
        }
        return newArray;
    }
    return [];
}

module.exports = dedupe;
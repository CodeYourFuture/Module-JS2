function dedupe(inputArray) {
    let uniqueArray = [];

    if (inputArray.length > 0) {
        for (let item of inputArray) {
            if (!uniqueArray.includes(item)) {
                uniqueArray.push(item);
            }
        }
        return uniqueArray;
    } else {
        return [];
    }
}

module.exports = dedupe;
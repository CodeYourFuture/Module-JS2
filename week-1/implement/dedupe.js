function dedupe(arr) {
    let newArr = [];
    for (const item of arr){
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
    }
    return newArr;
}
console.log(dedupe(["b","g","a","c","r","t","c", "g"]));
console.log(dedupe([]));
console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8]));

module.exports = dedupe;
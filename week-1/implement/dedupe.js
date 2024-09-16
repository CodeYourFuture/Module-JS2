function dedupe(arr) {
    const newArr = [];
    for (const item of arr){
        if (!newArr.includes(item)){
            newArr.push(item);
        }
    }return newArr;
}

console.log(dedupe(["a", "a", "a", "b", "b", "c"]));
console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8]));
console.log(dedupe([]));
const mixedArr = ["a", "d", 2, 3, 2, "d", 1, 1, "e"];
console.log(dedupe(mixedArr));
module.exports = dedupe;
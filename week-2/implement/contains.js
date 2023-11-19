function contains(obj, char) {
    return Object.keys(obj).includes(char)
}

const objEx = {a : 1, b:3};
// console.log(contains({},"c"));
const invalidParam = ["a", "b", "c"];
console.log(contains(invalidParam,"a"));

module.exports = contains;

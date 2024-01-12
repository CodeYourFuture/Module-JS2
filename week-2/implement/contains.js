function contains(obj, prop) {
  for (const key of Object.keys(obj)) {
    if (key === prop) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(contains({ a: 1, b: 2 }, "a"));
console.log(contains({ a: 1, b: 2 }, "c"));

module.exports = contains;

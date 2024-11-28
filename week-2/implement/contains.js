function contains(object, key) {
  if (typeof object !== "object" || object === null) {
    throw new TypeError("Invalid input: object must be a non-null object.");
  }
  return object.hasOwnProperty(key);
}
console.log(contains({ a: 1, b: 2 }, "a"));
console.log(contains({ a: 1, b: 2 }, "c"));
console.log(contains({}, "a"));

module.exports = contains;

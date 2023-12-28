function contains(object, property) {
  if (typeof object !== `object` || Array.isArray(obj)) {
    return false;
  }
  return object.hasOwnProperty(property);
}

module.exports = contains;

const contains = require("./contains.js");

// 'a' property exists in the object
const obj1 = { a: 1, b: 2 };
console.log(contains(obj1, "a"));

// 'c' property doesn't exist in the object
const obj2 = { a: 1, b: 2 };
console.log(contains(obj2, "c"));

//hasOwnProperty checks if an object has a specific property. it verifies whether a certain property belongs directly to the object or if it's inherited from its prototype chain.
//here it checks if object.has the same properties object.hasOwnProperty(property);

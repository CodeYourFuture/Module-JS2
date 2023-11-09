// Using hasOwnProperty method
function contains(a, b) {
  return a.hasOwnProperty(b);
  // WE write .include instate hasOwnProperty too
}

// Example usage:
const object = {
  a: 1,
  b: 2,
  age: 28,
};
const emptyObject = {};

console.log(contains(object, "a")); // Output: true
console.log(contains(object, "c")); // Output: false
console.log(contains(object, "")); // Output: false
console.log(contains(object, "age")); // Output: true
console.log(contains(emptyObject)); // Output: false
//console.log(contains(days, "age")); // Output: Error, days is not defined

module.exports = contains;

//The hasOwnProperty() method returns true if the specified property,
// is a direct property of the object — even if the value is null or undefined.The method returns false if the property is inherited,
// or has not been declared at all.Unlike the in operator, this method does not check for the specified property in the object's prototype chain.

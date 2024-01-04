// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

const result1 = invert({ a: 1 });
console.log(result1);

const result2 = invert({ a: 1, b: 2 });
console.log(result2);

const result3 = invert({ x: 10, y: 20, z: 30 });
console.log(result3);

// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// 'Object.entries' returns an array of a given object's own enumerable property [key, value] pairs.
// It is needed in this program because it allows us to iterate over the key-value pairs of the input object easily.
// The for...of loop is used to destructure each entry into [key, value], allowing us to access the key and value in each iteration.

// d) Explain why the current return value is different from the target output
// The current return value is different from the target output because the code incorrectly uses invertedObj.key to set the property in the inverted object.
// This always sets the property named 'key' rather than using the actual key from the input object.
// To fix this, we should use square brackets to dynamically set the property with the correct key:

function invertFixed(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

const result1_1 = invertFixed({ a: 1 });
console.log(result1_1);

const result2_2 = invertFixed({ a: 1, b: 2 });
console.log(result2_2);

const result3_3 = invertFixed({ x: 10, y: 20, z: 30 });
console.log(result3_3);

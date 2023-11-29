// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

console.log(invert({ x: 10, y: 20 }));

// a) What is the current return value when invert is called with { a : 1 }

// { a : 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }

// { a: 1, b: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}

// { 1 : a, 2 : b }

// c) What does Object.entries return? Why is it needed in this program?

// Object.entries creates an array of the key-value pairs. This allows us to identify in the for loop
// what key and value should be paired. Then we can reverse the pair instead of the complete object?

// d) Explain why the current return value is different from the target output

// Because the values and keys are turned into arrays in an object. Whereas before, they were just
// key pair values inside of an Object. Also, there positions have now changed. The values are now the keys,
// and the keys are now the values.

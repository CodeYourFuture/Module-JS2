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
console.log(invert({ a: 1, b: 2 }));
// a) What is the current return value when invert is called with { a : 1 }
// {'1': 'a'}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {'1': 'a', '2': 'b'}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {'1': 'a', '2': 'b'}

// c) What does Object.entries return? Why is it needed in this program?
// It returns an array containing arrays of key-value pairs of an object's enumerable
// d) Explain why the current return value is different from the target output

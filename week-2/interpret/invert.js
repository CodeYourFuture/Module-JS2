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
const obj = { a: 1, b: 2 };
const entries = Object.entries(obj);
console.log(invert({ a: 1 }));

console.log(invert({ a: 1, b: 2 }));

console.log(invert({ x: 10, y: 20 }));
console.log(entries);

// a) What is the current return value when invert is called with { a : 1 }
//Answer :key:1

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//Answer : key:2

// c) What is the target return value when invert is called with {a : 1, b: 2}
//Answer :{ '1': 'a' }

// c) What does Object.entries return? Why is it needed in this program?
//Answer:It returns an array of the keys and values, when it is needed

// d) Explain why the current return value is different from the target output
//Answer:It is different because invertedObj.key = value; this doesn't create a property with the actual value of key from the object. Instead, it literally sets a property named "key" in invertedObj.

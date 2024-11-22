// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
   // invertedObj.key = value;
   invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
//  invertedObj.key = the out put is  Output: { key: 1 } it use the key as value instead of taking value as key 

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//  invert({ a: 1, b: 2 }); out put is Output: { key: 2 } key is overwritten in the loop and the last iteration is shown in result 

// c) What is the target return value when invert is called with {a : 1, b: 2}
// invert({ a: 1, b: 2 }); Target Output: { "1": "a", "2": "b" } 

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries() returns an array of key-value pairs from an object. Each entry is a 2-element array: [key, value].

// d) Explain why the current return value is different from the target output
// invertedObj.key = value; issue in this line the property key is treated as string to fix this assign value like invertedObj[value] = key;

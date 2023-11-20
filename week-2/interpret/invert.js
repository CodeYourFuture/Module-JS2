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
console.log(invert({a:1, b:2}));
// a) What is the current return value when invert is called with { a : 1 }
//The current return value when invert is called with {a:1} is { key: 1 }.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//The current return value when invert is called with { a: 1, b: 2 } is { key: 2 }.

// c) What is the target return value when invert is called with {a : 1, b: 2}
//The target return value when invert is called with {a : 1, b: 2} is {1 : a, 2 : b}.

// c) What does Object.entries return? Why is it needed in this program?
/*Object.entries returns an array of a given object own enumerable property [key, value] pairs. 
(2) It is needed in the program because it allows the iteration of properties of the object[key, value] pair if the for of loop
// d) Explain why the current return value is different from the target output
/*The current value is different from the target value because in the loop, 
invertedObj.key=value is overwriting the property named in each iteration, 
not using the actual key from the original object. This can be corrected by using square bracket invertedObj[value]=key.*/
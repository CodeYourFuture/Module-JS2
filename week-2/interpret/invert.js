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

// a) What is the current return value when invert is called with { a : 1 }
// return value for `{a:1}` is `{ key: 1 }` .

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// return value for `{a:1, b:2}` is { key: 2 } . 

// c) What is the target return value when invert is called with {a : 1, b: 2} .
// target output should be `{'1':'a' , '2':'b'} 

// c) What does Object.entries return? Why is it needed in this program?
// `Object.entries()` return each key/value pair as an array with two item first one is the key and the second one is the value
// we use Object.entries() to make each pair as an array then we can loop throught it .
// IN THIS case it would be object.entries({a:1,b:2})=>[[a,1],[b,2]]


// d) Explain why the current return value is different from the target output
// the problem is inside the for..of loop ; `invertedObj.key = value;` this snippet of code . it should be like this inverted[value]=key.
// because inverted.key use the word `key` as string and assigns it to the key property and if we want to use variable to assign
// `[]` should be used however the code still doesn't swap the key/value pairs . correct code should be: inverted[value]=key.

// corrected version of invert function 

function invertCorrected(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value]= key;
  }

  return invertedObj;
}

console.log(invert({ a: 1, b: 2 }));
console.log(invertCorrected({ a: 1, b: 2 }));

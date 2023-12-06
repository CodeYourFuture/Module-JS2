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
// the output is {key: 1;} as i see the example above when I'm trying the function it outputs different than what the example target output is.
// b) What is the current return value when invert is called with { a: 1, b: 2 }
//the output is {key: 2;}
// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value when invert is called with { a: 1, b: 2 } should be { "1": "a", "2": "b" }.  
// c) What does Object.entries return? Why is it needed in this program?
// as I understood from research the Object.entries returns pairs of keys and values from an object. It's used here to loop through the input object's key-value pairs.
// d) Explain why the current return value is different from the target output
/*The current result is wrong because the code mistakenly uses a fixed key "key" instead of dynamically using the variable key during the loop.
The corrected code ensures that the keys in the inverted object are dynamically assigned based on the values from the original object.

here is updated function that should correctly produce the target output:
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
*/
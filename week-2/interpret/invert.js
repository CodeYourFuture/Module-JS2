// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;//invertedObj[key] = value; This line should correctly invert the key-value pairs.
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
//{key:1} is because of invertedObj.key = value; return key insted of the keys are dynamically

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//square brackets

// c) What is the target return value when invert is called with {a : 1, b: 2}
//return value an object with inverted key-value pairs -->{1: 'a', 2: 'b'}

// c) What does Object.entries return? Why is it needed in this program?
//returns an array of a given object's own enumerable property [key, value] pairs.


// d) Explain why the current return value is different from the target output
//As a result, all values in invertedObj are assigned to the property with the key name "key," rather than using the actual keys from the input object.


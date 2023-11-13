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
// {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {"1": "a", "2": "b"}

// d) What does Object.entries return? Why is it needed in this program?
//Object.entries returns an array of a given object's own enumerable property [key, value] pairs. It's used in this program to iterate over the key-value pairs of the input object, allowing you to easily access both the key and value within the loop.

// e) Explain why the current return value is different from the target output
/*
The current return value is different from the target output because in the loop, instead of using the name assigned to the key obtained from the iteration (key), the code is using the string "key" literally. So, every assignment is overwriting the same property, and the final object only reflects the last key-value pair of the input object.
*/
// To fix the function we should use square brackets instead of .
// and we should swipe the key and value words in the function for the function to work as intended.
/*
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
*/


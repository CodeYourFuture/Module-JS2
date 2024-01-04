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

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// { 'key': 1 }
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { 'key': 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}
// { '1' : 'a', '2' : 'b' }
// c) What does Object.entries return? Why is it needed in this program?
// It returns an array where each element in this array is another array with two elements created based on each object property:
// the first one is the property's key and the second one is the property's value, all of them as strings.
// It is needed because is the way that we can get each key and value from the object.
// d) Explain why the current return value is different from the target output
// The notation calling the key is wrong. The .key add or apply a value in the property called 'key', not the correct one
// got from the object by Object.entries() method. We have to use object[key] notation to use the variable declared in the for loop.
// Besides that, the invertedObj inside the for loop is wrong too. If the intention is return the pair key/value swapped, we have to
// use invertedObj[value] = key;

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
// It will return { key: 1 }. This is because using .key returns key as the key of the key-value pair.
// One way to correct that will be to use invertedObj[key].
// To return inverted object as expected, switch the key-value in the array to value-key (i.e. [value, key])
// Or the invertedObj.value = key

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// it will return { key: 2}, this is because the Object.entries(Obj) turns each key-value pair into an array such that we have 
// two arrays. When the function is called, the first array is used to create invertedObj, at first resulting in { key : 1 }. Then, 
// the second array is used to create the key-value pair again as { key : 2 }. Since, the key part remains as "key", it replaces the first one
// resulting in the output { key : 2 }.
// Fixing the function to return the right value for "key" will fix the problem. That is, writing invertObj[key] will replace key with the right key item rather than "key"

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value is {'1':'a', '2':'b' }


// c) What does Object.entries return? Why is it needed in this program?
// Object.entries() returns an array containing each key-value pair as arrays within the array.
// It is needed to split the key-value object into arrays to ease accessing the items within. 

// d) Explain why the current return value is different from the target output
// There are a number of reasons. One, the [key, value] is not inverted as required. That is, it should be re-written as [value, key]
// Alternatively, re-write the " invertedObj[key] = value " as " inverted[value] = key".
// Two, the invertedObj.key will fix the real key characters of key as "key" instead of as the right name.
// As a solution, rewrite the "invertedObj.key" as "invertedObj[value]"

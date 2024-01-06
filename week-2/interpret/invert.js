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
  
  // b) What is the current return value when invert is called with { a: 1, b: 2 }
  
  // c) What is the target return value when invert is called with {a : 1, b: 2}
  
  // c) What does Object.entries return? Why is it needed in this program?
  
  // d) Explain why the current return value is different from the target output

  a) When invert is called with { a: 1 }, the current return value will be { key: 1 }.

b) When invert is called with { a: 1, b: 2 }, the current return value will be { key: 2 }.

c) The target return value when invert is called with { a: 1, b: 2 } should be {"1": "a", "2": "b"}.

d) Object.entries returns an array of an object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop. It is needed in this program because it allows you to iterate through the properties of the input object and access both the keys and values.

The current return value is different from the target output because in the loop inside the invert function, the code is incorrectly using the property name 'key' to store the values. It should use the variable key to dynamically create properties in the invertedObj object. To fix this, you should change invertedObj.key = value; to invertedObj[value] = key; in the loop, which will correctly swap the keys and values in the object.







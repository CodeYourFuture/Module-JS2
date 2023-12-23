// Let's define how invert should work
//Ans:The inverse function retrieves and stores object values for later to be invoked

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};
  for (const key in obj){
    invertedObj[obj[key]] = key;
  }
  return invertedObj;
};
const result = invert({x : 10, y : 20});
console.log(result);

// a) What is the current return value when invert is called with { a : 1 }
// ans; {'1' : 'a'}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// ans:  { '1': 'a', '2': 'b' }
// c) What is the target return value when invert is called with {a : 1, b: 2}
//ans: The target is to swap the object.
// c) What does Object.entries return? Why is it needed in this program?
// ans: the Object.entries return an array of given[key, value] pairs, Each pairs represented as an array where the first element is the property key, and the second element is the property value.
// As Object.entries gave the same order as the for-in loop, I used the for-in loop as it made the code easier for me to understand.
// d) Explain why the current return value is different from the target output
// Ans: In javascript when an object pass to the function, the function receives a refrence to that object any changes made within the function object will affect the original object outside the function, the result is why target value is changed is because object passed by reference.


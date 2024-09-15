/*
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

The current return value for { a: 1 } is { key: 1 }.

// b) What is the current return value when invert is called with { a: 1, b: 2 }

The current return value for { a: 1, b: 2 } is { key: 2 }.

// c) What is the target return value when invert is called with {a : 1, b: 2}

The target return value for { a: 1, b: 2 } should be { '1': 'a', '2': 'b' }.



// c) What does Object.entries return? Why is it needed in this program?

 Object.entries returns an array of an object's key-value pairs. It's used to easily access keys and values in the loop.

// d) Explain why the current return value is different from the target output

The current issue is due to the incorrect assignment invertedObj.key = value;. It should be invertedObj[value] = key; to correctly swap keys and values.






*/
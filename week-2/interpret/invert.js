function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

// a) What is the return value when invert is called with { a : 1 }

// b) What is the return value when invert is called with { a: 1, b: 2 }

// c) What does Object.entries return? Why is it needed in this problem?

// d) What does

// d) Explain why the current return value is different from the target output

// d)

// // Let's define how invert should work

// // Given an object
// // When invert is passed this object
// // Then it should swap the keys and values in the object

// // E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// function invert(obj) {
//   const invertedObj = {};

//   for (const [key, value] of Object.entries(obj)) {
//     invertedObj.key = value;
//   }

//   return invertedObj;
// }

// // a) What is the current return value when invert is called with { a : 1 }

// // b) What is the current return value when invert is called with { a: 1, b: 2 }

// // c) What is the target return value when invert is called with {a : 1, b: 2}

// // c) What does Object.entries return? Why is it needed in this program?

// // d) Explain why the current return value is different from the target output

//..........................................................................................

// ANSWER

//Lets imagine that i have a special backpack, and I am trying to switch the names and items inside it. 
//The backpack has a list of things like a notebook, pens, lunch box, and a mobile phone. 
// this function switches  the names (labels) and  actual items in my backpack.


// This function switches the names and items in my backpack
function invert(backpack) {
  const switchedBackpack = {};

  // Here we get the names and items as pairs
  for (const [name, item] of Object.entries(backpack)) {
    // Here we switch the names with the items
    switchedBackpack[item] = name;
  }

  // Then we return the switched backpack
  return switchedBackpack;
}

// a) When invert is called with { notebook: "a" }
// The current return value would be { key: "a" }.
// We want it to be { "a": "notebook" }.
console.log(invert({ notebook: "a" }));

// b) When invert is called with { notebook: "a", pen: "b" }
// The current return value would be { key: "b" }.
// We want it to be { "a": "notebook", "b": "pen" }.
console.log(invert({ notebook: "a", pen: "b" }));

// c) The target return value when invert is called with { notebook: "a", pen: "b" }
// The target return value should be { "a": "notebook", "b": "pen" }.

// d) Getting pairs helps us switch them easily.
// We use it to go through the names and items together.

// e) The reason the switch didn't work as expected is because, in the loop, we made a mistake, 
//we wrongly put the item in a box named "key." .  We fixed it by switching the item with the right name.



// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};
// Iterate over the property names:
for (const getKeysValue of Object.values(author)) {
  //const getValue = author[getKeysValue];
  console.log(getKeysValue);
}

// in java Script Objects are not iterable

// const obj = { France: "Paris", England: "London" };
// for (const p of obj) {
// }
// TypeError: obj is not iterable

// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// const author = {
//   firstName: "Zadie",
//   lastName: "Smith",
//   occupation: "writer",
//   age: 40,
//   alive: true,
// };

// // for (const value of author) {
// //   console.log(value);
// }
//..................................................................

//ANSWER
//The problem with the code is that it's trying to use a “ for...of loop” that works well for lists of items like toys in a basket 
//or candies in a jar. But, the code is trying to use it on "object" (author in this case) that doesn't work exactly the same way. 
//We  should use different kind of loop such as “for...in loop”

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const key in author) {
  const value = author[key];
  console.log(value);
}
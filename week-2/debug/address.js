// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

// const address = {
//   houseNumber: 42,
//   street: "Imaginary Road",
//   city: "Manchester",
//   country: "England",
//   postcode: "XYZ 123",
// };

// console.log(`My house number is ${address[0]}`);

//..........................................................
//ANSWER

// the above code is not working because if this (address[0]). this is incorrect because address is an object, not an array.
// this is the fixed code:
const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);


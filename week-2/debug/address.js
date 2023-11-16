// Predict and explain first...
//It won't print because the code is an object and indexing doesn't work for an object unlike an array.

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123"
};

console.log(`My house number is ${address.houseNumber}.`);

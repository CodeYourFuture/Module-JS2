// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

// console.log(`My house number is ${address[0]}`);
console.log(`My house number is ${address.houseNumber}`);
console.log(`My house number is ${address["houseNumber"]}`);

// Before fixing the bug, the output would be "My house number is undefined".
// This is because the code attempts to access the houseNumber property using array-like syntax (address[0]),
// but the 'address' object does not have a property with the name 0.
// As a result, it will return undefined.
// The correct way to access the houseNumber property is using dot notation,
// or square bracket notation with the correct property name (address.houseNumber).

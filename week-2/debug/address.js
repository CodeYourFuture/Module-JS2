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

console.log(`My house number is ${address[0]}`);
// In order to accsess property value stored in object literals.
// we use dot notation to access the property value associated with a key .
console.log(`My house number is ${address.houseNumber}`);

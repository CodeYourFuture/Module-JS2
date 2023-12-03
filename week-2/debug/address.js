// Predict and explain first...

// Its because you are trying to call a specific key-value pair, but not using
// the correct method to do so, it should use the dot notation or square brackets method along with
// the key to access the value.

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

console.log(`My house number is ${address.houseNumber}`);

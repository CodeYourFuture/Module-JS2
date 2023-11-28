// Predict and explain first...

// This code should log out the houseNumber from the address object
/* because of the index 0, but address is an object, not an array. 
  To access the houseNumber property, we should use dot notation or bracket notation with the property name as string.
*/
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
console.log(`My house number is ${address["houseNumber"]}`);

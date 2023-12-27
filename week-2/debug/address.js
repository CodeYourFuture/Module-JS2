// Predict and explain first...
// This code should show the number of the house from the value in the object where is printing the number
// 42, but it will be undefined because is using the index [0] and not the key "houseNumber".

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

var address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address["houseNumber"]}`);

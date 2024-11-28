// Predict and explain first...
//Answer:We can not access object with index instead we access them with the key, that is why we mutilate it by using the ".",
//and then the key to get access to the house number.

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

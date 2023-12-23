// Predict and explain first...
// Ans: the output for [0] will be undefine becasue we incorrectly attempted to use array like notation ${address[0]} on the houseNumber. To acces the value of houseNumber propety we should use ${address.houseNumber}.
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

// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) { 
    // console.log(parseInt(coin) * quantity); 
    total += parseInt(coin) * quantity;
  }

  return `£${(total / 100).toFixed(2)}`; // to ensure all final results are to 2 d.p
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);
console.log(totalAmount);

// a) What is the target output when totalTill is called with the till object
// The target output is £4.4

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// To convert the object into an array containing arrays of key-value pair. 

// c) What does coin * quantity evaluate to inside the for...of loop?
// It evaluates to NaN because it is an attempt to multiply string (e.g. "20p" or "1p") and a number

// d) Write a test for this function to check it works and then fix the implementation of totalTill
module.exports = totalTill;
// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
   // console.log(coin * quantity);
    const coinValue = parseInt(coin);
    total += coinValue * quantity;
  }
  return `£${(total / 100).toFixed(2)}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);
module.exports = totalTill;
// a) What is the target output when totalTill is called with the till object
// the totalTill function is to calculate the total amount of money in pounds by multiplying the coin's value (in pence) by the quantity
// 10 * 1p = 10p
// 6 * 5p = 30p
// 4 * 50p = 200p
// 10 * 20p = 200p
//  total in pence is 10 + 30 + 200 + 200 = 440p, which is equivalent to £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Object.entries(till) because it allows us to iterate over both the keys and the values in the till object.
// Object.entries(till) returns an array of key-value pairs, allowing the loop to destructure them into coin and quantity on each iteration

// c) What does coin * quantity evaluate to inside the for...of loop?
// the loop, coin is a string representing the coin type (e.g., "1p", "5p"), and quantity is the number of coins of that type
// Multiplying a string (coin) by a number (quantity) results in a NaN (Not a Number),
// To fix this issue, the coin values must be converted to numbers representing their pence value (e.g., "1p" becomes 1, "5p" becomes 5, etc.).
// to solve this issue 
// const coinValue = parseInt(coin); // parse the number
// return `£${(total / 100).toFixed(2)}`; // Convert total to pounds and format to 2 decimal places
// d) Write a test for this function to check it works and then fix the implementation of totalTill

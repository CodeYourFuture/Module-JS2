// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin); 
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}


 const till = {
   "1p": 11,
   "5p": 2,
   "50p": 1,
   "20p": 43,
 };
console.log(totalTill(till));


module.exports = totalTill;
// a) What is the target output when totalTill is called with the till object
// to calculate the total value of the coins in the till and return it in pounds.
// b) Why do we need to use Object.entries inside the for...of loop in this function?
/* is to iterate over the key-value pairs of the till object. This is because the till object has attributes representing 
   coin denominations ("1p", "5p", etc.) and values representing the quantity of each coin. 
*/
// c) What does coin * quantity evaluate to inside the for...of loop?
/* inside the loop calculates the total value of a specific type of coin in the till. It multiplies the value of each coin 
   (like "1p" or "5p") by the number of times it appears (quantity). This helps find out how much money you have for each 
   type of coin, and the loop adds up these amounts to find the total value of all coins in the till. 
*/
// d) Write a test for this function to check it works and then fix the implementation of totalTill

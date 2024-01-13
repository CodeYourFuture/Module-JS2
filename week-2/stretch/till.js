// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let totalPence = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const numericValue = parseFloat(coin.replace(/[^\d.]/g, ""));
    totalPence += numericValue * quantity;
  }

  const pounds = Math.floor(totalPence / 100);
  const pence = (totalPence % 100).toFixed(0).padStart(2, "0"); // Padding pence with leading zero if needed

  return `${pounds}.${pence}£`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};

module.exports = totalTill;

const totalAmount = totalTill(till);
console.log(totalAmount); //total amount in pounds (£)

// a) What is the target output when totalTill is called with the till object

// b) Why do we need to use Object.entries inside the for...of loop in this function?

// c) What does coin * quantity evaluate to inside the for...of loop?

// d) Write a test for this function to check it works and then fix the implementation of totalTill

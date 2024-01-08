const fs = require("fs");
const txtDoc = fs.readFileSync("./input.txt", "utf8");
const txtList = txtDoc.split("\n");
const numList = txtList.map(Number);

function calculateFrequency(list) {
  let sum = 0;

  for (let x of list) {
    if (!isNaN(x)) {
      sum += x;
    }
  }
  return sum;
}

console.log(calculateFrequency(numList));

module.exports = calculateFrequency;

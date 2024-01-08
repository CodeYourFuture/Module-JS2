const fs = require("fs");
const txtDoc = fs.readFileSync(
  "/home/eytha/cyf/Module-JS2/week-1/stretch/aoc-2018-day1/input.txt",
  "utf8"
);
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
console.log("Current working directory:", process.cwd());

module.exports = calculateFrequency;

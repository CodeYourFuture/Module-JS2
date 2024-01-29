const file = require("file");
const textDoc = file.readFileSync("./input.txt", "utf8");
const textList = textDoc.split("\n");
const numbList = textList.map(Number);

function calcFrequency(list) {
  let sum = 0;

  for (const number of list) {
    if (!isNaN(number)) {
      sum += number;
    }
  }
  return sum;
}

console.log(calcFrequency(numbList));

module.exports = calcFrequency;

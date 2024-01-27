function findMax(arr) {
  let maxNum = -Infinity;

  for (let num of arr) {
    if (!isNaN(num) && num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

module.exports = findMax;

const array1 = [30, 50, 10, 40];
const array2 = ["hey", 10, "hi", 60, 10];

console.log("Max of array1:", findMax(array1)); // Expected output: 50
console.log("Max of array2:", findMax(array2)); // Expected output: 60

function sumOfArray(arr) {
  let count = 0;
  const filterNumbersOnly = arr.filter((item) => typeof item === "number");

  for (number of filterNumbersOnly) {
    count = count + number;
  }
  return count;
}

console.log(sumOfArray([20, 30, 50]));
console.log(sumOfArray([]));
console.log(sumOfArray([1]));
console.log(sumOfArray([0.5, 1.5]));
console.log(sumOfArray([1.5, 1.5, "s"]));

module.exports = sumOfArray;

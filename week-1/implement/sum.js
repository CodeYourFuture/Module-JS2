function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (!isNaN(num)) {
      totalSum += num;
    }
  }

  return totalSum;
}

module.exports = sum;

//test
const array1 = [30, 50, 10, 40];
const array2 = ["hey", 16, "hi", 60, 10];

console.log("Sum of array1:", sum(array1));
console.log("Sum of array2:", sum(array2));

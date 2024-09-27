// function sum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
      sum += array[i];
    }
  }
  return sum;
}

const gettingSum = [12, 33, 12, 33, 44];
console.log(sum(gettingSum)); // Output : 134

const emptyArray = [];
console.log(sum(emptyArray)); // Output: 0

const arrayWitheOneIndex = [12];
console.log(sum(arrayWitheOneIndex)); // Output: 12

const storeNegativeNumber = [12, -2];
console.log(sum(storeNegativeNumber)); // Output: 10

const floatArray = [3.14, 0.5];
console.log(sum(floatArray)); // Output: 3.64

const mixedArray = [12, "hello", 2.1, "integer", "sum", 2];
console.log(sum(mixedArray)); // Output : 16.1

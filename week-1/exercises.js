// finish and fix calculateMedian
// implement ( find max )
// implement find (linear search over an array)
// implement totalBill - iterate through a list and sum the numbers
// advent of code - go to a text file, split apart and then find the sum of all numbers in the file
// implement caesarCipher - with tests given
// stretch: sort
// calculateMax
// toCamelCase

// refactor old style for loop into for..of loop
// https://adventofcode.com/2018/day/1

const items = ["a", "b", "c", "d", "e"];

function find(list, target) {
  for (const [index, item] of list.entries()) {
    if (item === target) {
      return index;
    }
  }
}

function max(list) {
  let max = -Infinity;
  for (const item of list) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}

console.log(find(items, "a"));
console.log(max([10, 20, 2000, 410, 300]));

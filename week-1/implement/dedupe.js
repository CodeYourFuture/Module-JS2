/* The function dedupe() removes duplicates from an array by using the Set object's property to retain only unique elements, returning a new array without duplicates.


An example;

function dedupe(colors) { 
  return [...new Set(colors)]; //converts the array colors into a Set and Creates a new Set with the unique elements from the colors array.

//return Array.from(new Set(colors));//we can use this as well this also achieves the same result as the previous line, creating an array with unique elements from the colors array by first converting it into a Set and then into an array using Array.from().
}
const allColors = [
  "Green",
  "Blue",
  "Red",
  "Green",
  "Blue",
  "Red",
  "Orange ",
  "Yellow",
];
const notDuplicatedColors = dedupe(allColors);
console.log(notDuplicatedColors);


Another example;

function dedupe(arr) {
  return [...new Set(arr)];
}
module.exports = dedupe;

const targetOutput = ["a", "a", "a", "b", "b", "c"];
const NoDuplicateLetters = dedupe(targetOutput);
console.log(NoDuplicateLetters); */

function dedupe(arr) {
  if (arr.length === 0) {
    return []; // if array is empty then it returns an empty array
  }

  const deduplicateArray = new Set(arr);
  // Converting the incoming array into a Set data structure.
  // Set data structure stores only unique (non-repeating) values.

  if (deduplicateArray.size === arr.length) {
    return arr;
    //This compares the length of the original array with the size of the Set. If the size of the Set (deduplicateArray.size) is the same as the original array's length (arr.length), it means there are no repeating elements in the array.
  } else {
    return [...deduplicateArray];
  }
}
module.exports = dedupe;

console.log(dedupe(["a", "a", "a", "b", "b", "c"])); // Output: ['a', 'b', 'c']
console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8])); // Output: [5, 1, 2, 3, 8]

/*The function dedupe() removes duplicates from an array by using the Set object's property to retain only unique elements, returning a new array without duplicates.

function dedupe(colors) { 
  return [...new Set(colors)]; 
  //Converts the array colors into a Set and Creates a new Set with the unique elements from the colors array.

  //return Array.from(new Set(colors));// we can use this as well

  //achieves the same result as the previous line, creating an array with unique elements from the colors array by first converting it into a Set and then into an array using Array.from().
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
console.log(notDuplicatedColors); */
function dedupe(arr) {
  return [...new Set(arr)];
}
module.exports = dedupe;

const targetOutput = ["a", "a", "a", "b", "b", "c"];
const NoDuplicateLetters = dedupe(targetOutput);
console.log(NoDuplicateLetters);

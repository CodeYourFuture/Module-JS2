/* The function dedupe() removes duplicates from an array by using the Set object's property to retain only unique elements, returning a new array without duplicates.*/

function dedupe(arr) {
  if (arr.length === 0) {
    return [];
  }

  const deduplicateArray = new Set(arr);

  if (deduplicateArray.size === arr.length) {
    return arr;
  } else {
    return [...deduplicateArray];
  }
}
module.exports = dedupe;

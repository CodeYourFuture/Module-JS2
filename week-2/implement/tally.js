function tally(listOfItems) {
  if (!Array.isArray(listOfItems)) {
    throw new Error("Invalid input: Expected an array");
    // this part added after tests because "throw an error" test did not work
  }

  let count = {}; // we need to create an empty object to store counts

  for (let i = 0; i < listOfItems.length; i++) {
    let eachItem = listOfItems[i];

    if (count[eachItem]) {
      count[eachItem]++;
    } else {
      count[eachItem] = 1;
    }
  }
  return count;
}

module.exports = tally;

// i will start from zero index and iterate through the length of listOfItems.
// If an item is already counted, increase its count by one. Else, count it for the first time.

console.log(tally(["a"])); // Output: { a: 1 }
console.log(tally(["a", "a", "a"])); // Output: { a: 3 }
console.log(tally(["a", "a", "b", "c"])); // Output: { a: 2, b: 1, c: 1 } */

/*  const count = {};

  for (const item of listOfItems) {count[item] = (count[item] || 0) + 1;
  } */

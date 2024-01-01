/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a','a','a']), target output: { a: 3 }
 * tally(['a','a','b','c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

// Given an empty array
// When passed to tally
// Then it should return an empty object

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
function tally(array) {
  // Ensure input is an array
  if (!Array.isArray(array)) {
    throw new TypeError("Input must be an array");
  }

  // Handle empty array case
  if (array.length === 0) {
    return {};
  }

  // Initialize a counts object to store item frequencies
  const counts = {};

  // Iterate through the array, counting occurrences
  for (const item of array) {
    counts[item] = (counts[item] || 0) + 1; // Efficiently handle item existence
  }

  // Return the counts object
  return counts;
}

// Test cases
console.log(tally(['a']));              // Output: { a: 1 }
console.log(tally(['a', 'a', 'a']));     // Output: { a: 3 }
console.log(tally(['a', 'a', 'b', 'c'])); // Output: { a: 2, b: 1, c: 1 }

// Invalid input handling
try {
  tally("hello");
} catch (error) {
  console.error(error.message); // Output: Input must be an array
}

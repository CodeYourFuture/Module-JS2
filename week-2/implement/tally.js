function tally(items) {
  // Check if the input is an array
  if (!Array.isArray(items)) {
    return "Invalid input. Please provide an array.";
  }

  // empty object to store the counts
  const counts = {};

  for (const item of items) {
    // Check if the item is already in the counts object
    if (counts[item]) {
      // If yes, increment the count
      counts[item] += 1;
    } else {
      // If no, add the item to the counts object with a count of 1
      counts[item] = 1;
    }
  }
  return counts;
}

console.log(tally(["a", "b", "a", "b", "a", "a", "c", "a"]));

module.exports = tally;

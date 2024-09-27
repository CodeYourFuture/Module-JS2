// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];
//   return median;
// }

function calculateMedian(list) {
  const sortedList = list.slice().sort((a, b) => a - b); // Create a sorted copy of the list
  const middleIndex = Math.floor(sortedList.length / 2);

  // Check if the list length is odd or even to find the median
  if (sortedList.length % 2 === 0) {
    // For even-length lists, average the middle two elements
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    // For odd-length lists, return the single middle element
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;

module.exports = calculateMedian;

// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  // Create a temporary array to store the sorted values temporally
  const sortedList = [];
  for (let i = 0; i < list.length; i++) {
    sortedList.push(list[i]);
  }
  // Sort the temporary array in ascending order
  sortedList.sort((a, b) => a - b);

  // Calculate the index of the middle element
  const middleIndex = Math.floor(sortedList.length / 2);

  // Determine if the array length is even or odd
  if (sortedList.length % 2 === 0) {
    const median =
      (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2.0;
    return median;
  } else {
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;


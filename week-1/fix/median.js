// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = (list[middleIndex] + list[middleIndex-1])/2;
  if (list.length % 2 === 1) {
    return list[middleIndex];
  }return median;
}

module.exports = calculateMedian;

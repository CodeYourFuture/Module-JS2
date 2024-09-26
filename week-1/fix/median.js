// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const sortedMedian = list.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedMedian.length / 2);

  if (sortedMedian.length % 2 === 0) {
    return (sortedMedian[middleIndex - 1] + sortedMedian[middleIndex]) / 2;
  } else {
    return sortedMedian[middleIndex];
  }
}

module.exports = calculateMedian;

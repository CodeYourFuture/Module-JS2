// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  if (list.length % 2 === 0) { 
    const middleIndex1 = list.length / 2;
    const medianEven = (list[middleIndex1 - 1] + list[middleIndex1]) / 2;
    return medianEven;
  }
  const middleIndex = Math.floor(list.length / 2);
  const median = list[middleIndex];
  return median;
}

module.exports = calculateMedian;

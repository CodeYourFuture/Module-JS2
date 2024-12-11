// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  let median = 0
  if (list.length % 2 === 0) {
    const mean = (list[middleIndex - 1] + list[middleIndex]) / 2;
    median = mean;
  } else { median = list[middleIndex]; }
  return median;
}

module.exports = calculateMedian;

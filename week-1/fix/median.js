// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const sortedList = list.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(list.length / 2);
  let median;
  if (sortedList.length % 2 === 0) {
    median = (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    median = sortedList[middleIndex];
  }
  return median;
}
module.exports = calculateMedian;

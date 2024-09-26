// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const sortedList = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(list.length / 2);
  let median = 0;

  if (list.length % 2 === 1) {
    median = sortedList.splice(middleIndex, 1)[0];
  } else {
    median = (sortedList[middleIndex] + sortedList[middleIndex - 1]) / 2;
  }

  return median;
}

module.exports = calculateMedian;

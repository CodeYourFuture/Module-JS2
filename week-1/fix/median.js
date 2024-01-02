// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const sortedList = list.slice().sort((a, b) => a - b);

  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 === 0) {
    const middleValues = sortedList.slice(middleIndex - 1, middleIndex + 1);
    return (middleValues[0] + middleValues[1]) / 2;
  } else {
    return sortedList[middleIndex];
  }
  // const median = list.splice(middleIndex, 1)[0];
  // return median;
}

module.exports = calculateMedian;

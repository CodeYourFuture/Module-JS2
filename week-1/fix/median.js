// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const listCopy=[...list];
  const listLength = listCopy.length;
  const middleIndex = Math.floor(listLength / 2);

  if (listLength % 2 != 0) {
    const medianOdd = listCopy.splice(middleIndex, 1)[0];
    return medianOdd;
  } else if (listLength % 2 === 0) {
    const medianEven = (listCopy[middleIndex - 1] + listCopy[middleIndex])/2;
    return medianEven;
  }
}

module.exports = calculateMedian;



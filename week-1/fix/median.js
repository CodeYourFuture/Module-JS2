// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) {
    throw new Error("input must not be an empty array");
  }
  const sortList = [...list].sort((a, b) => a - b);
  const middleNumber = Math.floor(sortList.length / 2);

  if (sortList.length % 2 !== 0) {
    return sortList[middleNumber];
  }
  const leftMiddleNum = sortList[middleNumber - 1];
  const rightMiddleNum = sortList[middleNumber];
  const median = (leftMiddleNum + rightMiddleNum) / 2;
  return median;
}

module.exports = calculateMedian;

console.log(calculateMedian([1, 2, 3, 4]));
console.log(calculateMedian([1, 2, 3, 4, 5, 6]));

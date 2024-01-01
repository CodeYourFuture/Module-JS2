// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  //sub goal=find the middle position of the numbers 
  // Step 1: Create a copy of the original array
  const copiedList = [...list];
  // Step 2: Find the middle index of the sorted array
  const middleIndex = Math.floor(copiedList.length / 2);
  // Step 3: Determine the median
  const median = copiedList.length % 2 === 0
  ? (copiedList[middleIndex - 1] + copiedList[middleIndex]) / 2
  : copiedList[middleIndex];
  // const median = list.splice(middleIndex, 1)[0];
  return median;
}

module.exports = calculateMedian;
//export the function:make the function available for use in other files in other directory as well
// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory



function calculateMedian(list) {
  // First, let's make a copy of the input array to avoid modifying the original
  const sortedList = [...list];
  sortedList.sort((a, b) => a - b);

  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 === 0) {
    // If the array has an even number of elements, average the two middle values
    const middleValue1 = sortedList[middleIndex - 1];
    const middleValue2 = sortedList[ middleIndex];
    return (middleValue1 + middleValue2) / 2;
  } else {
    // If the array has an odd number of elements, return the middle value
    return sortedList[middleIndex];
  }
}
const myList = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]; const median = calculateMedian(myList); console.log("Median:", median);
module.exports = calculateMedian;

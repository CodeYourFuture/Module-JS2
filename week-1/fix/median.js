// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
    const sortedList = list.slice().sort((a, b) => a - b); // Create a sorted copy of the input array
    const middleIndex = Math.floor(sortedList.length / 2);
  
    if (sortedList.length % 2 === 0) {
      // If the array length is even, return the average of the middle values
      return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
    } else {
      // If the array length is odd, return the middle value
      return sortedList[middleIndex];
    }
  }
  
  module.exports = calculateMedian;
  
// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const sortedList = list.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2); 
  const median = sortedList.slice(middleIndex-1);  
  if (list.length % 2 === 0){
    return (sortedList[middleIndex] + sortedList[middleIndex-1])/2;
  }
  return sortedList[middleIndex]; 
}

module.exports = calculateMedian; 


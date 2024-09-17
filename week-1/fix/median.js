// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const copiedList= [...list];
  copiedList.sort((a,b) => a - b);
  const middleIndex = Math.floor(copiedList.length / 2);
  if(copiedList.length % 2 === 0) {
    const middleValue1 = copiedList[middleIndex - 1];
    const middleValue2 = copiedList[middleIndex];
    return (middleValue1 + middleValue2) / 2;
  }

else {
  return copiedList[middleIndex];
}
}


const myList = [9, 0, 4, 8, 1, 4, 5, 2]; const median = calculateMedian(myList); 
console.log("Median:", median); 
  



module.exports = calculateMedian;

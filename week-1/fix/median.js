// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

// function calculateMedian(list) {
//   //sub goal=find the middle position of the numbers 
//   // Step 1: Create a copy of the original array
//   const copiedList = [...list];
//   // Step 2: Find the middle index of the sorted array
//   const middleIndex = Math.floor(copiedList.length / 2);
//   // Step 3: Determine the median
//   const median = copiedList.length % 2 === 0
//   ? (copiedList[middleIndex - 1] + copiedList[middleIndex]) / 2
//   : copiedList[middleIndex];
//   // const median = list.splice(middleIndex, 1)[0];
//   return median;
// }
function calculateMedian(list){
  const sortedList = [...list];
  sortedList.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);
  if(sortedList.length % 2 === 0){//If even, return the average of the two middle values
    const middleValue1 = sortedList[middleIndex - 1];
    const middleValue2 = sortedList[middleIndex];
    return (middleValue1 + middleValue2) / 2; 
  }
  else { // If odd 
    return sortedList[middleIndex];
   }
}
const myList = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]; const median = calculateMedian(myList); console.log("Median:", median); 
  


module.exports = calculateMedian;
//export the function:make the function available for use in other files in other directory as well

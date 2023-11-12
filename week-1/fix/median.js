// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}

module.exports = calculateMedian;



const arr=[1,2,3,4];
console.log(arr);
const index=Math.floor(arr.length/2)
console.log(index);
 const median=arr.splice(index,1)[0];
console.log(median);


// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list[middleIndex];
  if( list.length %2 == 0){
    return list[middleIndex]-0.5;
  }
  else{return median;}
}
console.log(calculateMedian([1, 2, 3, 4, 5]));
console.log(calculateMedian([1, 2, 3, 5]));
module.exports = calculateMedian;

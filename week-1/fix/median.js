// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  // const list = [1, 2, 3];
  const middleIndex = (list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  if (list.length % 2 === 0) {
  return median;}
  return (middleIndex + (middleIndex + 1)) / 2; 
}

module.exports = calculateMedian;

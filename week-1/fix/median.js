// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

/* function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}

module.exports = calculateMedian; */
// When you set module.exports = calculateMedian;, you're essentially exporting the calculateMedian function from the current module. This means that when another file uses require to import this module, it can access the calculateMedian function.

// function should be to calculate the median value of a given list, but the calculateMedian function isn't actually computing the median of the list. Instead of finding the median element of the list, this function is extracting the element from the middle index of the list and returning it.

function calculateMedian(list) {
  const middleIndex = Math.floor((list.length - 1) / 2);
  if (list.length % 2 === 0) {
    return (list[middleIndex] + list[middleIndex + 1]) / 2;
  } else {
    return list[middleIndex];
  }
}
module.exports = calculateMedian;

const listExample = [2, 3, 4, 5, 6, 7, 8];
console.log(calculateMedian(listExample));

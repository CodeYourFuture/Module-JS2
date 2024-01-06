// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const listToSort = list.sort((a, b) => a - b);
  console.log(listToSort);
  const middleIndex = Math.floor(listToSort.length / 2);
  console.log(middleIndex);
  const elementInMiddle = listToSort.slice(middleIndex - 1, middleIndex + 1);
  console.log(elementInMiddle);

  //for (let i = 0; i < listToSort.length; i++) {
  if (listToSort.length % 2 === 0) {
    return (elementInMiddle[0] + elementInMiddle[1]) / 2;
  } else {
    return listToSort[middleIndex];
    //}
  }
}

module.exports = calculateMedian;

console.log(calculateMedian([2, 3, 8, 20]));

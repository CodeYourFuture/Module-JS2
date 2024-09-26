
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];
//   return median;
// }

// module.exports = calculateMedian;


//...........................................................

//ANSWER 

function calculateMedian(numbers) {
  const sortedNumbers = sortNumbers([...numbers]); // Create a sorted copy of the numbers
  const middleIndex = findMiddleIndex(sortedNumbers);

  if (isEvenLength(sortedNumbers)) {
    // If there are an even number of numbers, find the average of the two middle ones
    const middleElements = getMiddleElements(sortedNumbers, middleIndex);
    return calculateAverage(middleElements);
  } else {
    // If there are an odd number of numbers, return the middle one
    return sortedNumbers[middleIndex];
  }
}

function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

function findMiddleIndex(numbers) {
  return Math.floor(numbers.length / 2);
}

function isEvenLength(numbers) {
  return numbers.length % 2 === 0;
}

function getMiddleElements(numbers, middleIndex) {
  return numbers.slice(middleIndex - 1, middleIndex + 1);
}

function calculateAverage(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
}

module.exports = calculateMedian;

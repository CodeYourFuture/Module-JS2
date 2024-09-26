function sumNumbers(numbers) {
    let totalSum = 0;
  
    for (const element of numbers) {
      if (isNumeric(element)) {
        totalSum += element;
      }
    }
  
    return totalSum;
  }
  
  function isNumeric(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  
  module.exports = sumNumbers;
  
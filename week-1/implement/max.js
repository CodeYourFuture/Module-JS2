function findMaxNumber(numbers) {
    if (isEmptyArray(numbers)) {
      return -Infinity;
    }
  
    let maximumNumber = findInitialMax();
  
    for (const element of numbers) {
      if (isNumeric(element)) {
        maximumNumber = compareAndUpdateMax(maximumNumber, element);
      }
    }
  
    return maximumNumber;
  }
  
  function isEmptyArray(array) {
    return array.length === 0;
  }
  
  function findInitialMax() {
    return -Infinity;
  }
  
  function isNumeric(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  
  function compareAndUpdateMax(currentMax, newNumber) {
    return Math.max(currentMax, newNumber);
  }
  
  module.exports = findMaxNumber;
   

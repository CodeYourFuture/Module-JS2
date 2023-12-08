function max(array) {
    if (array.length === 0) {
      return -Infinity;
    }
  
    let maxNumber = -Infinity;
    for (const element of array) {
      if (typeof element === 'number' && element > maxNumber) {
        maxNumber = element;
      }
    }
  
    return maxNumber;
  }
  
  module.exports = max;
  
function max(array) {
    let maxNumber = -Infinity;
    
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number' && !isNaN(array[i])) {
        maxNumber = Math.max(maxNumber, array[i]);
      }
    }
    
    return maxNumber;
  }
  
  module.exports = max;
  
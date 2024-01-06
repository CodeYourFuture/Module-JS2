function sum(array) {
    let total = 0;
    
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number' && !isNaN(array[i])) {
        total += array[i];
      }
    }
    
    return total;
  }
  
  module.exports = sum;
  
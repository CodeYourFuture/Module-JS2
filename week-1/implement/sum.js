function sum(array) {

    let total = 0;
  
    
    for (const element of array) {
    
      if (typeof element === 'number') {
      
        total += element;
      }
    }
  
    
    return total;
  }
  
  module.exports = sum;
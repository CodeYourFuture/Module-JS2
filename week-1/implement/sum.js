function sum(list) {
  let sumValue = 0;

  for (const element of list) {
    if (typeof element === 'number' && !isNaN(element)) {
    
        sumValue += element; 
      
    }
  }

  return sumValue;
}

module.exports = sum;
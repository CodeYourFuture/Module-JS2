function sum(array) {
    // armazenar a soma
    let total = 0;
  
    
    for (const element of array) {
      // Verifique se o elemento é um número
      if (typeof element === 'number') {
        // Adicione o número à soma total
        total += element;
      }
    }
  
    
    return total;
  }
  
  module.exports = sum;
  

  // esse foi mais facil
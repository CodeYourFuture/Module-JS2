function sum(list) {
    let result = 0;
    let arr = [];
    
    
    for (let i = 0; i < list.length; i++) {
      if (typeof list[i] === "number") {
        arr.push(list[i]);
      } else if (typeof list[i] === "string") {
        // Attempt to convert the string to a number
        const numberValue = parseInt(list[i]);
  
        if (!isNaN(numberValue)) {
          arr.push(numberValue);
        }
      }
    }
  
    const sumOfList = arr.reduce((a, b) => a + b ,0);
     return sumOfList;
    
    
  }
 
  module.exports = sum;
  //console.log(sum([110, 7, -1, '2rt', '8et', 'uh1']));
  
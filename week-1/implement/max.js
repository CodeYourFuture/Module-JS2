function max(maxlist) {
    let arr = [];
    
    
    for (let i = 0; i < maxlist.length; i++) {
      if (typeof maxlist[i] === "number") {
        arr.push(maxlist[i]);
      } 
      else if (typeof maxlist[i] === "string") {
        // Attempt to convert the string to a number
        const numberValue = parseInt(maxlist[i]);
  
        // Check if the conversion was successful and the result is a number
        if (!isNaN(numberValue)) {
          arr.push(numberValue);
         }
      }
    }
    if(arr.length === 0){
        return -Infinity;
         }
    
  
    //return arr;
    const maxString= Math.max(...arr);
    return maxString;
    // return Math.min.apply(null, result);
  }
  
  module.exports = max;
  //console.log(sum([2.45,'err' ,3.87, -40,]));


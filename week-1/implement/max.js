function max(maxlist) {
    let arr = [];
    
    for (let i = 0; i < maxlist.length; i++) {
      if (typeof maxlist[i] === "number") {
        arr.push(maxlist[i]);
      } 
      else if (typeof maxlist[i] === "string") {
        //parseInt mean to convert the string to a number.
        const numberValue = parseInt(maxlist[i]);
      }
    }
    if(arr.length === 0){
        return -Infinity;
         }
    const maxString= Math.max.apply(null, arr);
    return maxString;
  }
  
  module.exports = max;
  //console.log(max([2.45,'err' ,3.87, -40,]));


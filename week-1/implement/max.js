function maxSums(array) {
    let maxSumValue = -Infinity;
    let currentSum = 0;
    for(let i=o;i<array.length;i++){
        currentSum+=array[i];
        if(currentSum>maxSumValue){
            maxSumValue=currentSum;
        }
    }
    return maxSumValue;
}



// function max(arr) {
//     let maxNum = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
//         maxNum = Math.max(maxNum, arr[i]);
//       }
//     }
//     return maxNum;
//   }
  
//   module.exports = max;

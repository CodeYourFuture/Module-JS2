function maxNum(arr) {
  let max = -Infinity;
    for (i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }  
    }
    return max;
}

module.exports = maxNum;

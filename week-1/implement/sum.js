function sum(arr) {
  let sum = 0;
  //   for (i = 0; i < arr.length; i++) {
  //     if (!isNaN(arr[i])) {
  //       sum += arr[i];
  //       return sum;
  //     }
  //   }
  if (arr.length === 0) {
    return 0;
  }
  for (const number of arr) {
    if (!isNaN(number)) {
      sum += number;
    }
  }
  return sum;
}

module.exports = sum;

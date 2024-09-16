function sum(arr) {
  let totalSum = 0;
  for (let element of arr) {
    if (typeof element === "number" && !isNaN(element)) {
      totalSum += element;
    }
  }

  return totalSum;
}

module.exports = sum;

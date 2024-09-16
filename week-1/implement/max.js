function max(arr) {
  // Initialize maxNumber to negative infinity
  let maxNumber = -Infinity;

  // Loop through each element in the array
  for (let element of arr) {
    // Check if the element is a number
    if (typeof element === "number") {
      // Update maxNumber if the current element is greater
      if (element > maxNumber) {
        maxNumber = element;
      }
    }
  }

  return maxNumber;
}

module.exports = max;

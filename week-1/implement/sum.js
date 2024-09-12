function sum(arr) {
  let mySum = arr.reduce((total, currentValue) => {
    if (typeof currentValue === "number") {
      return total + currentValue;
    }
    return total;
  }, 0);
  return mySum;
}

console.log(sum([4, 5, "y", 7, "yuo", 2]));
console.log(sum([-3, -34, -6, -8]));
console.log(sum([9.4, 5.2, 7.5, 11.7]));
console.log(sum([]));

module.exports = sum;
function largest(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] > max) max = arr[i];
    }
  }

  return max;
}
let arr = ["tt", 98, -9, 1, 39, "a", "df", 99];
console.log("Largest in given array is " + largest(arr));

module.exports = largest;


function summation(arr) {
  let summ = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      summ = summ + arr[i];
    }
  }

  return summ;
}
let arr = [4, "as", 1, 3, 7, "y"];
console.log("Summation for given array is " + summation(arr));

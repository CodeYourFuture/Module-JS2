function sum(arr) {
  let sumResult = 0;

  for (const num of arr) {
    if (typeof num === "number" && num !== "number") {
      sumResult += num;
    }
  }

  return sumResult;
}

array1 = [10, 20, 30];
array2 = ["hey", -10, "hi", 60, 10];
console.log(sum(array1));
console.log(sum(array2));

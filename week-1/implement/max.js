function max(arr) {
  let maxArray = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] !== "number") {
      maxArray = Math.max(maxArray, arr[i]);
    }
  }

  return maxArray;
}

const array1 = [30, 50, 10, 40];
const array2 = ["hey", 10, "hi", 60, 10];
console.log(max(array1));
console.log(max(array2));

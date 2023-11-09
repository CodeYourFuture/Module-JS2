//const counts = {};

const data = ["a", "b", "b"];
const data2 = ["a", "a", "a"];
const data3 = ["a", "a", "b", "c"];
const emptyData = [];
const invalidData = "1";

function count(arr) {
  if (typeof arr === "string") {
    return "invalid input !";
  }
  const count = arr.reduce(
    (prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
    {}
  );
  return count;
}

console.log(count(invalidData)); // Output: Error, repeat is not defined

module.exports = count;

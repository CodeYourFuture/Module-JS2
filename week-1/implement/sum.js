function sum(array) {
  const sumOfNum = array.filter((items) => typeof items === "number");

  return sumOfNum.reduce((acc, current) => acc + current, 0);
}
module.exports = sum;

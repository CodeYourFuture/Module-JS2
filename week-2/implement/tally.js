function tally(arr) {
  if (typeof arr != "object") {
    return "It is an error!";
  }
  let myTallyCount = {};

  for (item of arr) {
    if (myTallyCount[item]) {
      myTallyCount[item] += 1;
    } else {
      myTallyCount[item] = 1;
    }
  }
  return myTallyCount;
}
const myCount = "a";
const myCount1 = ["a1", "b", "c2", "a1", "r", "c2", "c2"];
console.log(tally(myCount));
console.log(tally(myCount1));

module.exports = tally;

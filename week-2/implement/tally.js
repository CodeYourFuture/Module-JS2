function tally(arr) {
    const counter = {};
  
    if (typeof arr === "string") {
      return "Error, you should pass an array of values";
    }
  
    arr.forEach((item) => {
      if (counter[item]) {
        counter[item] += 1;
      } else {
        counter[item] = 1;
      }
    });
    return counter;
  }
  
  console.log(tally(["a", "a", "a", "hello", "bahadory", "bahadory", "marcus"]));
  console.log(tally("hello"));
  
  module.exports = tally;
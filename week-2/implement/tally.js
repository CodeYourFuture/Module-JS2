function tally(arr){
    if (typeof arr !== 'object'){
        return "Invalid argument";
    }
    const arrayCount = {};
    for (const item of arr) {
        if (arrayCount[item]) {
          arrayCount[item] += 1;
        } else {
          arrayCount[item] = 1;
        }
      }
      return arrayCount;
}

console.log(tally("a"));
// console.log(typeof ["a","a","b"]=='object');
module.exports = tally;
// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateFrequency(list) {
  // track frequency of each value
  let freqs = new Map();
  for (let num of list) {
    if (typeof num !== "number");

    freqs.set(num, (freqs.get(num) || 0) + 1);
    
  }
  return freqs;
}

  //Find the value with the highest frequency
  function highestFrequency(freqs){
  let maxFreq = 0;
  let mode;
  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }
  return maxFreq === 0 ? NaN : mode;
}
function calculateMode(list) {
  const freqs = calculateFrequency(list);
  const mode = highestFrequency(freqs);
  return mode;
}
const freqs = [5, "6", 8, 8, null, 9, 9];
const result = calculateMode(freqs)
console.log(result);
module.exports = calculateMode;


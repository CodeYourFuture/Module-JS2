// You are given an implementation of calculateMode
// calculateMode does 2 things:
// 1. One part of the code tracks the frequency of each value
// 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions with different roles

function calculateMode(list) {
  // track frequency of each value
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") continue;

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  // Find the value with the highest frequency
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

module.exports = calculateMode;

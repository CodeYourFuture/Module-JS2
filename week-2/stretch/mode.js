// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function trackFreq(list) {
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") continue;

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }
  return freqs;
}

function highestFreq(freqs) {
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
  // track frequency of each value
  return highestFreq(trackFreq(list));
  // Find the value with the highest frequency
}
console.log(calculateMode([1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5]));

module.exports = calculateMode;

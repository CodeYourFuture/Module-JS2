// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateMode(list) {
  // track frequency of each value
  const freqs = trackFrequency(list);
  const mode = findMode(freqs);

  return mode;
}
  // Find the value with the highest frequency
function findMode(freqs) {
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
// Function to track the frequency of each value in the list
function trackFrequency(list) {
  let freqs = new Map();
  for (let num of list) {
    if (typeof num !== "number") continue;

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}
console.log(
  "value with the highest frequency:",
  calculateMode([2, 3, 3, 3, 3, 3, 1, 2])
);
module.exports = calculateMode;

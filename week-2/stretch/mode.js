// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above


function calculateMode(list) {
  trackFrequency(list);
  const mode = valueHighestFrequency(list);

  return mode;
}

function trackFrequency(list) {
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") continue;

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }
  return freqs;
}

function valueHighestFrequency(list) {
  let maxFreq = 0;
  let mode;
  let freqs = trackFrequency(list)

  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }
  return maxFreq === 0 ? NaN : mode;
}

let result = calculateMode([1, 4, 1, 2, 3, 2, 1]);
console.log(result);

module.exports = calculateMode;
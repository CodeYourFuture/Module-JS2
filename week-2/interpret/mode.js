// Track frequencies
function trackFrequencies(list) {
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") continue;

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}

// Get value with highest frequency
function getMax(freqs) {
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

function mode(numbers) {
  const freqs = trackFrequencies(numbers);
  return getMax(freqs);
}

console.log(mode([1, 2, 2, 2, 3, 4, 5, 3]));

module.exports = mode;

// lookup.js
function lookup(pairs) {
  const result = {};

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    const country = pair[0];
    const currency = pair[1];
    result[country] = currency;
  }

  return result;
}

module.exports = lookup;


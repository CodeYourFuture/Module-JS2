function dedupe(array) {
  let deduplicatedArray = []

  if (array.length === 0) {
    return deduplicatedArray
  }

  array.forEach(element => {
    !deduplicatedArray.includes(element) ? deduplicatedArray.push(element) : null
  });
  
  return deduplicatedArray
}


module.exports = dedupe;

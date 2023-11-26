function dedupe(arr) {
     // empty array to store unique elements
  const dedupeArray = [];

  // Loop through each element in the input array
  for (let element of arr) {
    // Check if the element is not already in the dedupeArray
    if (!dedupeArray.includes(element)) {
      // If not, add it to the uniqueArray
      dedupeArray.push(element);
    }
  }

  return dedupeArray;
}



module.exports = dedupe;
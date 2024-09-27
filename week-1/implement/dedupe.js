function dedupe(array) {

    const uniqueElements = new Set(array);
  
    const dedupedArray = [...uniqueElements];
  
    return dedupedArray;
}

module.exports = dedupe;
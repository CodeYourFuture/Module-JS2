// function dedupe() {}

//............................................

//ANSWER

function dedupe(array) {
    const uniqueSet = new Set(array);
    const dedupedArray = [...uniqueSet];
    return dedupedArray;
  }
  
  module.exports = dedupe;
  
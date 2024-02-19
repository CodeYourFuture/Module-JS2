module.exports = createTally;

function createTally(items){
    if (!Array.isArray(items)) {
        return('Error');
      }

    const result = {};
    for (const item of items) {
      if (result[item]) {
        result[item]++;
      } 
      else {
        result[item] = 1;
      }
    }
    return result;
}
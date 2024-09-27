function tally(arr) {
    const count = {};
  
    for (let i = 0; i < arr.length; i++) {
      let ele = arr[i];
      if (count[ele]) {
        count[ele] += 1;
      } else {
        count[ele] = 1;
      }
    }
  
    return count;
  }
  
  const arr = [];
  const result = tally(arr);
  console.log(result);




module.exports = tally;
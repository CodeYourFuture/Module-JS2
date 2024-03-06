// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
    const middleIndex = (list.length + 1)/2; 

  if(list.length%2 !== 0){
    return list[middleIndex-1];
  }
  else{
    const firstIndex = Math.floor(middleIndex);
    const secondIndex = Math.round(middleIndex);
     
    return (list[firstIndex-1]+list[secondIndex-1])/2; 
     
  }
}

module.exports = calculateMedian;
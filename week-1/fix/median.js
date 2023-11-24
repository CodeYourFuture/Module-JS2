// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  let med=0;
  const soretdList=list.sort();
  const middleIndex = Math.floor(soretdList.length / 2);
  if(soretdList.length%2!=0){
    
    med=soretdList[middleIndex];
  }
  else{
    med=(soretdList[middleIndex]+soretdList[middleIndex-1])/2;

    }
  
  return med;
  // }
  // const median = list.splice(middleIndex, 1)[0];
  // return median;
}


module.exports = calculateMedian;



const arr=[1,2,3,4,5];
console.log(calculateMedian([1, 2, 3]));

console.log(calculateMedian([1, 2, 3, 4]));
console.log(calculateMedian([1, 2, 3, 4, 5]));


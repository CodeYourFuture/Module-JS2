// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const sortedList = list.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2); 
  const median = sortedList.slice(middleIndex-1);    // 1 2 3 4 = 3(because 1 is 0 index)/2=1.5 (math.floor will give the integer which is 1, the index 1 is 2)
  if (list.length % 2 === 0){
    return (sortedList[middleIndex] + sortedList[middleIndex-1])/2;
  }
  return sortedList[middleIndex]; 
}

module.exports = calculateMedian; // this is to link this file with the test file 

// to run tests on this go int he specific folder and file by cd and then write npm test median 



//1. order the list in ascending order 
//2. numbers of items in list / 2 

//3. if step 2 gives two numbers 
//   a. add the two numbers and divide by 2 
//4. if step 2 gives one number return that number as median 


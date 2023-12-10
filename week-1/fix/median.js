//Fix this implementation
//Start by running the tests for this function
//If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

 function calculateMedian(list) {
  const listsToSort= list.sort((a, b) => a - b);
  const middleIndex = Math.floor(listsToSort.length / 2);
  const elementsInMiddle = listsToSort.slice(middleIndex - 1, middleIndex + 1);
  
  for (let i = 0; i < listsToSort.length; i++){
    if(listsToSort.length % 2 === 0){
    return (elementsInMiddle[0] + elementsInMiddle[1]) / 2;
 }
 else {
    return listsToSort[middleIndex];
  }
}

};

module.exports = calculateMedian;



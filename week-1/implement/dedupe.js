function dedupe(arr) {
    // Create an  empty array to store the final result
    const uniqueElements = [];
    //function give back empty list,if no duplicate elements to remove
    // Loop through each element in the array
    for (let elements of arr) {
        // Check if the element is not already in the uniqueElements object
        if (!uniqueElements.includes(elements)) {//-->(!uniqueElements[elements])
            // If the element is not in the uniqueElements object, add it to the object and the result array
            uniqueElements[elements] = true;
            uniqueElements.push(elements);
        }

}
}
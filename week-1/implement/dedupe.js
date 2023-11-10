function dedupe(arr) {
    let newArr = [];
    for (const item of arr){
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
    }
    return newArr;
}

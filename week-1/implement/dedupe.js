function dedupe(item) {
    let arr = [];
    
    const mySet = new Set();
    for (const elements of item){
        if(!mySet.has(elements)){
      arr.push(elements);
      mySet.add(elements);
        }
    }

    return arr;
}

//console.log(dedupe([2,2,'5','7' ,'5',8]));

module.exports = dedupe;
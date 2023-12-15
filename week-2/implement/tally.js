function tally(items){
    const counts = {};
    if (!Array.isArray(items)){   // Array.isArray it it method to determines whether the value is Array or not.
        return "error";
    }
    items.forEach(item => {          // .forEach method is iterate over each array element.It is similat to for (let i = 0; i < items.length; i++)}  
        counts[item] = (counts[item] || 0) + 1
    })
    return counts;
}
//const listOfItems = tally(['a', 'a', 'a']);
//console.log(listOfItems);

module.exports = tally;
 
function tally(array) {
    if(!Array.isArray(array)){
        return "Input must be an array";
    }
    if(array.length===0){
        return{};
    }
    const counts= {};
    for(const item of array){
        if (counts[item]){
            counts[item]++;
        }else{
            counts[item] = 1;
        }
        return counts;
    }
    
}
console.log(tally(['a']));              // Output: { a: 1 }
console.log(tally(['a', 'a', 'a']));     // Output: { a: 3 }
console.log(tally(['a', 'a', 'b', 'c']));
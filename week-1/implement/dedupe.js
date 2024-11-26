function dedupe(numbers) {

    return [ ...new Set(numbers)]



}

console.log(dedupe([1,1,13]));
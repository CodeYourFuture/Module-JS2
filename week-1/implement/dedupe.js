function deduped(arr) {
    let data = []; 
    arr.forEach(element => {
        if (!data.includes(element)){
            data.push(element)
        }
    });
    return data;
}

//console.log(deduped([2, 5, 2, 3, 5, 1]))

module.exports = deduped; 
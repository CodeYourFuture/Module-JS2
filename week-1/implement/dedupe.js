function deduped(arr) {
    let data = []; 
    arr.forEach(element => {
        if (!data.includes(element)){
            data.push(element)
        }
    });
    return data;
}

module.exports = deduped; 
let arr = [1, 2, 2, 3,"a","a","b","c"];
function dedupe(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

console.log(dedupe(arr));

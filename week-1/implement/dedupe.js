function dedupe(item) {
    let arr = [];

    for (const element of item){
        if(!arr.includes(element)){
      arr.push(element);
        }
    }
return arr;
}
// console.log(dedupe([2,2,'5','7' ,'5',8]));

module.exports = dedupe;
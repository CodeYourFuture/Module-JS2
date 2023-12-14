function maxNumber(num) {
    if (num.length === 0) {
        return -Infinity; 
    }

    if (num.length === 1 && typeof num === 'number') {
        return num;
    }

    let maxNum = 0;

    for (let i = 0; i < num.length; i++) {
     if(typeof num[i]!=='number'){continue;}
        if (num[i] >= maxNum) {
            maxNum = num[i];
        }
    }

    return maxNum;
}
console.log(maxNumber([])); 
console.log(maxNumber(['hey', 10, 'hi', 60, 10]));
module.exports = maxNumber;
function maxNumber(inputNumber) {
    if (num.length === 0) {
        return -Infinity; 
    }

    if (num.length === 1 && typeof num === 'number') {
        return inputNumber;
    }

    let maxNum = 0;

    for (let i = 0; i < inputNumber.length; i++) {
     if(typeof inputNumber[i]!=='number'){continue;}
        if (inputNumber[i] >= maxNum) {
            maxNum = inputNumber[i];
        }
    }

    return maxNum;
}
module.exports = maxNumber;
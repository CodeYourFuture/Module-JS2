function maxNumber(inputNumber) {
    if (inputNumber.length === 0) {
        return -Infinity; 
    }

    if (inputNumber.length === 1 && typeof inputNumber === 'number') {
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
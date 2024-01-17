function sumNumbers(arr) {
    let result = 0;
if(arr.length ==0){return 0;}
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result += arr[i];
        }
    }

    return result;
}
const numbers = [30, 'hey', 10, 'hi', 60, 10];
const numbe = [30];
const numb = [30, 'hey', -10, 'hi', 60.9, 10];
module.exports = sumNumbers;
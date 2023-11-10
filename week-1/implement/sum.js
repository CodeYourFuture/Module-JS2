function sum(arr){
    let total = 0;
    for (const item of arr){
        if (typeof item === "number"){
            total += item;
        }
    }
    return total;
}

module.exports = sum;

const wifeyEx = [9.4,5.2,11.8,7.5];
console.log(sum(wifeyEx));
const mixNums = [10, -8, 4, 5, 60, 20, -50, 3];
let listExample1 = [10, 4, 5, 500, 60, 20, -50, 3];
let listExample2 = [10, "hey", 4, 5, 500, 60, 20, "a", -50, "z", 3];
let emptyExample = [];
console.log(sum(listExample1));
console.log(sum(listExample2));
console.log(sum(emptyExample));
console.log(sum(mixNums));
const decimalArray = [0.01, 0.3, 5.4, 2.7];
console.log(sum(decimalArray));
const arrayWithNonNumeric = [10, "hey", true, 4, 5, false,40, 20, "a", -50, "z", 3];
console.log(sum(arrayWithNonNumeric));

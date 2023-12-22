function contains(obj,prop) {
    return obj.hasOwnProperty(prop);
}
const person01 = {name:'sab',
age:'18',
eyeColor:'black',};

console.log(contains(person01,'age'));
console.log(contains(person01,'agee'));
module.exports = contains;

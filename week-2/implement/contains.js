function contains(obj,prop) {
    return obj.hasOwnProperty(prop);
}
const person01 = {name:'sab',
age:'18',
eyeColor:'black',};

module.exports = contains;

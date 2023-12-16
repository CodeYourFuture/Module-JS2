function contains(property) {
    const obj = property.obj
    const propName = property.propName;
for (let key in obj) {
    if (obj.hasOwnProperty(key) && key === propName) {
      return true;
  }
}
  return false;
};
 

//const invalidInput = {a: 6, b: 8};
//console.log(contains({ obj: invalidInput,propName: 'b' })); // false

//const object = {a: 3, c: 7}
//console.log(contains({obj: object, propName: 'b'})) // false



module.exports = contains;






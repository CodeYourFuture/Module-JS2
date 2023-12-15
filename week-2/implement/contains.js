function contains(property) {
    const obj = property.obj
    const propName = property.propName;
   // if(typeof obj !== 'object' || Array.isArray(obj) || obj === null){
     //   return false;
    //}
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




// let Object = property.Object;
//     let propName = property.propName;
//     if(typeof Object !== 'object' || Array.isArray(Object) || Object  === null){
//         return false;
//     }
// for (let key in Object) {
//     if (Object.hasOwnProperty(key) && key === propName) {
//       return true;
//   }
// }
//   return false;


// for (let prop in objectName) {
//     if (objectName.hasOwnProperty(prop)) {
//       return false;
//     }
//   }
//   return true;
// };

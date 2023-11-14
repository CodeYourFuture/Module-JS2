function contains(object, property) {
   
    for (let key in object) {
        return key == property;
    }
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
   return true;
}
module.exports = contains;

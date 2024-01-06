function contains(obj, propertyName) {
    if (typeof obj === 'object' && obj !== null) {
      return propertyName in obj;
    } else {
      return false;
    }
  }
  
  module.exports = contains;
  

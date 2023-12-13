// function contains() {}


//.............................................

//ANSWER

function contains(object, propertyName) {
    // here we are cheching if the object is a valid object (not an array or null)
    if (object === null || typeof object !== 'object') {
      return false;
    }
  
    // Here we are Checking if the object has the provided property
    return object.hasOwnProperty(propertyName);
  }
  
module.exports = contains;
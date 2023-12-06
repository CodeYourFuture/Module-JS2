function contains(obj, propertyName) {
  // Check if the input is an object
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    // If the input is not a valid object, return false
    return false;
  }

  // Check if the property exists in the object
  return propertyName in obj;
}

module.exports = contains;

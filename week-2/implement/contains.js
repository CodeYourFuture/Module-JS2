function contains(obj, key) {
  if (Array.isArray(obj)) {
    throw new Error("Invalid parameter: array");
  }

  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && prop === key) {
      return true;
    }
  }
  return false;
}

module.exports = contains;

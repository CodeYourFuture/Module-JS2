function contains(a,b) {
if (typeof a !== `object` && a === null) {
    return false;
}
return true;
}

module.exports = contains;

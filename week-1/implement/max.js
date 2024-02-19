
function getMax(array){
    array = array.filter(value => typeof value === 'number' && !isNaN(value));
    return Math.max.apply(null, array);
}

module.exports = getMax;
function createLookup(array) {
  // implementation here
  const result={}
  for(let i=0;i<array.length; i++){
const key= array[i][0];
const value=array[i][1];
result[key]=value;
}

return result;


}

/* ======= Test suite is provided below... =====
 */
module.exports = createLookup;

const { logDOM } = require("@testing-library/dom");

//logDOM(document.body); // 'document' object is not available in the Node.js environment.


function createLookup(codePairs) {
  // implementation here
  const objResult  = {};
  for(const [countCode, currencyCode] of codePairs){
    objResult [countCode] = currencyCode;
  }
  return objResult;
}

const replace = createLookup([['US', 'USD'], ['CA', 'CAD']]);
console.log(replace )



module.exports = createLookup;















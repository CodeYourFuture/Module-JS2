function contains(obj,input) {
    if(typeof obj==='object' &&  obj!=null && !Array.isArray(obj)){
        if(Object.keys(obj).includes(input)){
            return true;
        }
        else return false;
    }
    else if(Array.isArray(obj)){
            //return new Error('paratmeter is anArray , it should be a key/value object');
            return false;
        }
    else{
        return false;
        }
    
}

module.exports = contains;

const obj={a:1,b:2,c:3};
console.log(Array.isArray([]));
console.log(contains({},1));
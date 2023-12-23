const totalTill = require("./till");

test("When this till object is passed to totalTill Then it should return the total amount in pounds ", ()=>{
        const elements = {
            "20p" : 4,
            "2p"  : 50,
            "30p" : 4,
        }
        const expectedResult =  '£3'
        expect(totalTill(elements)).toBe(expectedResult);
});
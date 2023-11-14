const totalTill=require('./till.js');

test('it should return 4.4 for the input param',()=>{
    const input={
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
    };
    const input2={
    "1p": 10,
    "5p": 6,
    '10p':10,
    "50p": 4,
    "20p": 10,
    };
    expect(totalTill(input)).toBe('£4.4');
    expect(totalTill(input2)).toBe('£5.4');
})
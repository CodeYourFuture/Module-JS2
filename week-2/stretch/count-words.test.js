const countWords=require("./count-words");

test("returns an object where the keys are the words from the string and the values are the number of times the word appears in the string", () => {
    expect(countWords("This is a test. This is only a test.")).toEqual({ This: 2, is: 2, a: 2, test:2, only:1});
  });
  test("returns an object the values are the number of times the word appears in the string ignoring punctuation", () => {
    expect(countWords("Hi! look look, it is a fish.")).toEqual({look: 2, Hi: 1, it:1,is: 1, a:1, fish:1});
  });
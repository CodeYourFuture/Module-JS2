const countWords=require("./count-words");

test("returns an object with keys that are the words from the string and the values are the number of times the word appears in the string", () => {
    expect(countWords("you and me and you")).toEqual({you: 2, and: 2, me: 1});
  });
//   test("returns an object the values are the number of times the word appears in the string ignoring punctuation", () => {
//     expect(countWords("")).toEqual({look: 2, Hi: 1, it:1,is: 1, a:1, fish:1});
//   });
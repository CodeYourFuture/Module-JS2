const countWords = require("./count-words")


test("returns the frequency of each string", () => {
    const words = "you and me and you";
    expect(countWords(words)).toEqual({ you: 2, and: 2, me: 1 });
});

test("returns the frequency of string to ignore the case of the words ", () => {
    const words = "You and Me and You";
    expect(countWords(words)).toEqual({ you: 2, and: 2, me: 1 });
});

test("returns the frequency of string to remove punctuations", () => {
    const words = "You! and Me, and You?";
    expect(countWords(words)).toEqual({ you: 2, and: 2, me: 1 });
});
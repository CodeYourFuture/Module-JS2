// for the tests, do not modify this array of books

function readingList(li){
return li[Math.floor(Math.random() * li.length)];
}


// function pickFromArray(choices) {
//   return choices[Math.floor(Math.random() * choices.length)];
// }
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

function bookTitle(){
const nameTitle = document.getElementById("titleName");
const currentTitle = readingList(books)
// console.log(currentTitle)
nameTitle.innerText= currentTitle.title; 
const getAuthor = document.getElementById("author");
getAuthor.innerText = currentTitle.author;
};


// function getQoutes(evet){
//   const quoteParagahraph = document.getElementById("quote");
//   const currentQuote = pickFromArray(quotes);
//   quoteParagahraph.innerText = currentQuote.quote;
//   const quoteParagahraph2 = document.getElementById("author");
//   quoteParagahraph2.innerText = currentQuote.author;

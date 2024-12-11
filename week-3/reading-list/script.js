// for the tests, do not modify this array of books
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
// document.body.style.width = "100vh";
const unorderList = document.getElementById("reading-list");
books.forEach((book) => {
  const newlist = document.createElement("li");
  newlist.style.width = "90%";
  const titlePar = document.createElement("p");
  const authorPar = document.createElement("p");
  const backImage = document.createElement("img");
  backImage.style.width = "30%";
  backImage.style.height = "50%";
  titlePar.textContent = book.title;
  authorPar.textContent = book.author;
  backImage.src = book.bookCoverImage;
  newlist.appendChild(titlePar);
  newlist.appendChild(authorPar);
  newlist.appendChild(backImage);
  unorderList.append(newlist);
  if (book.alreadyRead == true) {
    newlist.style.background = "green";
  } else {
    newlist.style.background = "red";
  }
});

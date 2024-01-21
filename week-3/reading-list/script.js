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

const container = document.getElementById("reading-list");

function appendBook(book) {
  const liBook = document.createElement("li");

  const description = document.createElement("p");
  description.textContent = book.title + " by " + book.author;

  const alreadyRead = book.alreadyRead;
  const imgSrc = document.createElement("img");
  imgSrc.setAttribute("src", book.bookCoverImage);
  imgSrc.style.height = "400px";
  if (alreadyRead) {
    liBook.style.backgroundColor = "green";
  } else {
    liBook.style.backgroundColor = "red";
  }
  liBook.appendChild(description);

  liBook.appendChild(imgSrc);

  container.appendChild(liBook);
}

for (let book of books) {
  appendBook(book);
}

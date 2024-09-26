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

function renderBooks(book) {
  const bookElement = document.createElement("li");

  bookElement.style.backgroundColor = book.alreadyRead ? "green" : "red";

  const titleElement = document.createElement("h3");
  titleElement.textContent = book.title;
  bookElement.appendChild(titleElement);

  const authorElement = document.createElement("p");
  authorElement.textContent = book.author;
  bookElement.appendChild(authorElement);

  const imageElement = document.createElement("img");
  imageElement.src = book.bookCoverImage;
  bookElement.appendChild(imageElement);

  return bookElement;
}

function readingList() {
  const readingList = document.getElementById("reading-list");

  readingList.innerHTML = "";

  books.forEach((book) => {
    const bookElement = renderBooks(book);

    readingList.appendChild(bookElement);
  });
}

window.onload = function () {
  readingList(books);
};

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

function createBookElement(book) {
  const bookElement = document.createElement("li");
  bookElement.style.backgroundColor = book.alreadyRead ? "green" : "red"; //
  bookElement.style.marginBottom = "5rem";

  const titleElement = document.createElement("span");
  titleElement.textContent = book.title;
  bookElement.appendChild(titleElement);

  const authorElement = document.createElement("p");
  authorElement.textContent = book.author;
  bookElement.appendChild(authorElement);

  const imageElement = document.createElement("img");
  imageElement.src = book.bookCoverImage;
  imageElement.alt = `${book.title} Cover`;
  bookElement.appendChild(imageElement);

  return bookElement;
}

function readingList(books) {
  const readingListContainer = document.getElementById("reading-list");

  // Clear existing content
  readingListContainer.innerHTML = "";

  books.forEach((book) => {
    const bookElement = createBookElement(book);
    readingListContainer.appendChild(bookElement);
  });

  document.body.style.marginTop = "4rem"; // Adjust the value as needed
}

window.addEventListener("DOMContentLoaded", function () {
  readingList(books);
});

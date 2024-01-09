function loadBooks() {
  let booksList = document.querySelector("#reading-list");

  books.forEach(book => {
    const title = book.title;
    const author = book.author;
    const alreadyRead = book.alreadyRead;
    const bookCoverImage = book.bookCoverImage;
    console.log(title);
    console.log(author);
    console.log(alreadyRead);
    console.log(bookCoverImage);

    let htmlLi = document.createElement("li");
    let htmlPTitle = document.createElement("p");
    let htmlPAuthor = document.createElement("p");
    let htmlImg = document.createElement("img");

    booksList.appendChild(htmlLi);
    htmlLi.setAttribute("alreadyRead", alreadyRead)

    htmlLi.appendChild(htmlPTitle);
    htmlPTitle.textContent = title;
    htmlLi.appendChild(htmlPAuthor);
    htmlPAuthor.textContent = author;
    htmlLi.appendChild(htmlImg);
    htmlImg.setAttribute("src", bookCoverImage);
  });
}

window.onload = loadBooks
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


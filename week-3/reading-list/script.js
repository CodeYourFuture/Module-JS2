function readingList(books) {
  const readingList = document.getElementById("reading-list");

  for (const item of books) {
    const list = document.createElement("li");

    list.setAttribute("class", item.alreadyRead ? "teal" : "red");

    const p = document.createElement("p");
    p.innerText = `${item.title} by ${item.author}`;

    readingList.appendChild(list);
    list.appendChild(p);

    const image = document.createElement("img");
    image.src = item.bookCoverImage;
    list.appendChild(image);
  }
}

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

readingList(books);

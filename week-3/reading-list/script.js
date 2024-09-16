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

let ul = document.querySelector("#reading-list");

for (let i = 0; i < books.length; i++) {
  const li = document.createElement("li");
  li.setAttribute("id", "li");
  ul.appendChild(li);

  let title = document.createElement("p");
  title.setAttribute("id", "title");
  li.appendChild(title);
  title.innerText = `Book title: ${books[i].title}`;

  let author = document.createElement("h1");
  li.appendChild(author);
  author.innerText = ` Author: ${books[i].author}`;

  const backgroundImage = document.createElement("img");
  backgroundImage.setAttribute("id", "background-imag");
  ul.appendChild(backgroundImage);
  backgroundImage.src = books[i].bookCoverImage;

  if (books[i].alreadyRead === true) {
    li.style.background = "green";
  } else {
    li.style.background = "red";
  }
}

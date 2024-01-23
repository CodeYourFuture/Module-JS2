
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


const getReadingList = document.getElementById("content");
const listOfBooks = document.getElementById("reading-list");
console.log(getReadingList);

for (const item of books){
  const li = document.createElement("li");
  listOfBooks.appendChild(li);

  const p = document.createElement("p");
  li.appendChild(p);
  p.textContent = `${item.title} by ${item.author}`;

  const image = document.createElement("img");
  li.appendChild(image);
  image.src = item.bookCoverImage;

  if (item.alreadyRead === true){li.setAttribute("class", "green")}
  else {li.setAttribute("class", "red")}
}
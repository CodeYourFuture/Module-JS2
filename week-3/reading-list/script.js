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

const readingList = document.getElementById("reading-list");
for (let index = 0; index < books.length; index++) {
  const list = document.createElement("li");
  
  if(books[index].alreadyRead === true){
    list.setAttribute("class", "green");
  }
  else{
    list.setAttribute("class", "red");
  }
  

  const p = document.createElement("p");

  p.innerText = `${books[index].title} by ${books[index].author}`;

  const div = document.querySelector("#content");
  readingList.appendChild(list);
  list.appendChild(p);

  const image = document.createElement("img");
  image.src = books[index].bookCoverImage;
  list.appendChild(image);
}

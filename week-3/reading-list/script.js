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



const ulList = document.querySelector('#reading-list');
  for (const book of books) { 
    const li = document.createElement("li");
    ulList.appendChild(li);
  
    const bookInfo = document.createElement("p");
    bookInfo.innerText = book.title + "-------"+book.author;
    li.appendChild(bookInfo);

 const img = document.createElement("img");
    img.src = book.bookCoverImage;
    li.appendChild(img);

 if(!book.alreadyRead){
    li.style.background="red"
  } else {
    li.style.background="green"
 }
}




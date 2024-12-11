// for the tests, do not modify this array of book

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
    alreadyRead: false,
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


// const contentDiv = document.getElementById("content")
// const readingList = document.getElementById("reading-list");
// console.log(readingList)
// const list = document.createElement("li")

// let p = document.createElement("p");
// p.innerText = books[0].title



// const book = document.createElement("li")
// const details = document.createElement("p")


//--------------------------------------------------------------

const readingList = document.getElementById("reading-list")


for (const book of books) {
  
  const list = document.createElement("li")

  if (book.alreadyRead === true){
    list.setAttribute("class","green")
  }
  else{
    list.setAttribute("class","red")
  }

  

  const div = document.getElementById("content")

  readingList.appendChild(list)
  const p = document.createElement("p")
  p.innerText = `${book.title} by ${book.author}`
 
  list.appendChild(p);

  const image = document.createElement("img")
  image.src = book.bookCoverImage;
  list.appendChild(image);
}






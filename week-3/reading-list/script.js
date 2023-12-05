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

function listStructure(){
  // createing a li tag for 
  const listItem=document.createElement('li');
  listItem.className='list-item';
  // p tag to hold title of the book
  const titleOfBook=document.createElement('p');
  titleOfBook.className='title';
  // p tag to hold author name
  const authorOfBook=document.createElement('p');
  authorOfBook.className='author';

  // img tag to hold books image
  const bookImage=document.createElement('img');
  bookImage.className='book-image';

  listItem.appendChild(titleOfBook,authorOfBook,bookImage);
}


books.forEach(element => {
  

});
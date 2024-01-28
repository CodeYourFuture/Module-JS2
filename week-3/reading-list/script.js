// // for the tests, do not modify this array of books

function readingList(li) {
  const shuffledBooks = [...li];    //the three dots is spread syntext that copy the shallow array.

  
  for (let i = shuffledBooks.length - 1; i > 0; i--) {
    const getRandomBook = Math.floor(Math.random() * (i + 1));
    [shuffledBooks[i], shuffledBooks[getRandomBook]] = [shuffledBooks[getRandomBook], shuffledBooks[i]];
  }

  return shuffledBooks;
}

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

function bookTitle() {
  const shuffledBooks = readingList(books);

  const itemLists = document.querySelectorAll(".order-list");
   
  for (const i in itemLists) {
    const currentItem = itemLists[i];
    currentItem.classList.add(shuffledBooks[i].alreadyRead ? "read" : "unread");

    currentItem.querySelector(".title").textContent = shuffledBooks[i].title;
    currentItem.querySelector(".author").textContent = shuffledBooks[i].author;
    currentItem.querySelector(".cover").src = shuffledBooks[i].bookCoverImage;
  }
}

bookTitle();



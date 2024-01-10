// // for the tests, do not modify this array of books

function readingList(li) {
  // Shallow copy the array to avoid modifying the original array
  const shuffledBooks = [...li];

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = shuffledBooks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledBooks[i], shuffledBooks[j]] = [shuffledBooks[j], shuffledBooks[i]];
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
  console.log(shuffledBooks);

  // Iterate through each list item and apply the appropriate class
  const listItems = document.querySelectorAll(".order-list");

  for (let i = 0; i < listItems.length; i++) {
    const currentItem = listItems[i];
    currentItem.classList.add(shuffledBooks[i].alreadyRead ? "read" : "unread");

    // Update title, author, and cover for each book
    currentItem.querySelector(".title").innerText = shuffledBooks[i].title;
    currentItem.querySelector(".author").innerText = shuffledBooks[i].author;
    currentItem.querySelector(".cover").src = shuffledBooks[i].bookCoverImage;
  }
}

// Call the function to display a random combination of books
bookTitle();



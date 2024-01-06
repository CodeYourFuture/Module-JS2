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


   books.forEach((book) => {  
   
     const li = document.createElement("li");
     
     const bookImage = document.createElement("img");
     
     const bookInfo = document.createElement("div");

     bookInfo.innerHTML = `<p>${book.title} by ${book.author}</p>`;
 
     bookImage.src = book.bookCoverImage;
    
 

     if (book.alreadyRead) { 
      
       li.style.backgroundColor = "brown"; 
     } else {  
       li.style.backgroundColor = "orange"; 
     }
 
     li.appendChild(bookImage);
     li.appendChild(bookInfo);
 
     
     readingList.appendChild(li);
   });
 
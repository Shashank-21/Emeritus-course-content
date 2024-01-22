let myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    borrowed: 2,
  },
  {
    title: "Eclipse",
    author: "Stephenie Meyer",
  },
  {
    title: "The Time Machine",
    author: "H.G. Wells",
    borrowed: 4,
  },
  {
    title: "Midnight Sun",
    author: "Stephenie Meyer",
    borrowed: 3,
  },
];

function createBook(title, author) {
  const book = {
    title,
    author,
  };
  return book;
}

function addBook(library, title, author) {
  const newBook = createBook(title, author);
  library.push(newBook);
  console.log(library);
}

function updateBorrowCount(library, bookTitle) {
  const book = library.find((b) => b.title === bookTitle);
  if (!book) {
    console.log("Book not found");
    return;
  }
  if (!book.borrowed) {
    book.borrowed = 1;
  } else {
    book.borrowed += 1;
  }
}

function acceptBook(book, library, existingBookAction, newBookAction) {
  //Find a book by its title and author
  let existingBook;
  for (let libraryBook of library) {
    if (
      book.title === libraryBook.title &&
      book.author === libraryBook.author
    ) {
      existingBook = libraryBook;
    }
  }
  //If the book exists, use the existingBookAction
  //Else use the newBookAction
}

const newBook = {
  title: "Dune",
  author: "Frank Herbert",
};
acceptBook(newBook, myLibrary, updateBorrowCount, addBook);
const existingBook = {
  title: "Eclipse",
  author: "Stephenie Meyer",
};
acceptBook(existingBook, myLibrary, updateBorrowCount, addBook);

// You can print the library array to the console to verify the book has been added or updated.
console.log(myLibrary);
// Don't change this line
module.exports = {
  myLibrary,
  addBook,
  updateBorrowCount,
  acceptBook,
};

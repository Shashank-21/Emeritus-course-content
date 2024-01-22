let myLibrary = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", borrowed: 2 },
  { title: "Eclipse", author: "Stephenie Meyer" },
  { title: "The Time Machine", author: "H.G. Wells", borrowed: 4 },
  { title: "Midnight Sun", author: "Stephenie Meyer", borrowed: 3 },
  { title: "A Brief History of Time", author: "Stephen Hawking" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "100 Years of Solitude", author: "Gabriel García Márquez" },
  { title: "The Midnight Library", author: "Matt Haig" },
  { title: "The Sun Also Rises", author: "Ernest Hemingway" },
];

function createBook(title, author) {
  const book = { title, author };
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
  const existingBook = library.find(
    (libraryBook) =>
      libraryBook.title === book.title && libraryBook.author === book.author
  );
  if (existingBook) {
    existingBookAction(library, existingBook.title);
  } else {
    newBookAction(library, book.title, book.author);
  }
}

function keywordInTitleCriteria(keyword, book) {
  return book.title.toLowerCase().includes(keyword.toLowerCase());
}

function getBookRecommendation(
  library,
  recommendationFunction,
  recommendationCriteria
) {
  const recommendedBooks = [];
  for (const book of library) {
    // Todo: call the `recommendationFunction` with the parameters `recommendationCriteria` and `book`. Store the result in the `isBookRecommended` variable
    const isBookRecommended = recommendationFunction(
      recommendationCriteria,
      book
    );
    if (isBookRecommended) {
      recommendedBooks.push(book);
    }
  }
  return recommendedBooks;
}

// Uncomment the next 3 lines to see your getBookRecommendation function in action!
console.log(getBookRecommendation(myLibrary, keywordInTitleCriteria, "Time"));
console.log(
  getBookRecommendation(myLibrary, keywordInTitleCriteria, "Midnight")
);
console.log(getBookRecommendation(myLibrary, keywordInTitleCriteria, "Sun"));

// Don't change this line
module.exports = { myLibrary, getBookRecommendation, keywordInTitleCriteria };

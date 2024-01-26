document.addEventListener("DOMContentLoaded", function () {
  const BookObject = defineClosure();

  document.getElementById("show-title").addEventListener("click", function () {
    const bookName = document.getElementById("book-name-input").value;
    const myBook = bookName ? BookObject(bookName) : BookObject();
    document.getElementById("book-title").textContent = myBook.getBookTitle();
  });
});

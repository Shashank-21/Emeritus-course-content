document.addEventListener("DOMContentLoaded", function () {
  const BookObject = defineClosure();

  document
    .getElementById("show-details")
    .addEventListener("click", function () {
      const bookName = document.getElementById("book-name-input").value;
      const currentPage = document.getElementById("page-number-input").value;
      const myBook = bookName
        ? currentPage
          ? BookObject(bookName, currentPage)
          : BookObject(bookName)
        : BookObject();
      document.getElementById("book-title").textContent = myBook.getBookTitle();
      document.getElementById(
        "current-page"
      ).textContent = `Current page: ${myBook.getPage()}`;
    });
});

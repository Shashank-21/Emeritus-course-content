function defineClosure() {
  function BookObject(name = "Default Book", currentPage = 1) {
    let bookName = name;
    let currentPageNumber = currentPage;

    return {
      getBookTitle: function () {
        return bookName;
      },
      getPage: function () {
        //Todo: Return the current page number.
        return currentPageNumber;
      },
    };
  }

  return BookObject;
}

if (typeof module !== "undefined") {
  module.exports = { defineClosure };
}

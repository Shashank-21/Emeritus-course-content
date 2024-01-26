function defineClosure() {
  function BookObject(name = "Default Book", currentPage = 1) {
    let bookName = name;
    let currentPageNumber = currentPage;

    return {
      getBookTitle: function () {
        return bookName;
      },
      getPage: function () {
        return currentPageNumber;
      },
      turnPage: function () {
        // Todo: increment the currentPageNumber
        currentPageNumber++;
      },
    };
  }

  return BookObject;
}

if (typeof module !== "undefined") {
  module.exports = { defineClosure };
}

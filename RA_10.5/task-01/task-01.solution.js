function defineClosure() {
  function BookObject(name = "Default Book") {
    let bookName = name;

    return {
      getBookTitle: function () {
        // Todo: return the name of the book
        return bookName;
      },
    };
  }

  return BookObject;
}

if (typeof module !== "undefined") {
  module.exports = { defineClosure };
}

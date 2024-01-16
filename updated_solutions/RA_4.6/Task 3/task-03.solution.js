function describeBook(book) {
  const desc = [];

  for (const key in book) {
    let description;
    if (key === "isAvailable") {
      dsecription = book[key]
        ? "This book is available!"
        : "This book is not available";
    } else {
      description = "The " + key + " of the book is " + book[key];
    }
    desc.push(description);
  }

  return desc;
}
// Uncomment this line of code to test it:
const book = describeBook(originalBook);
console.log(book);

// Don't change this line
module.exports = {
  describeBook,
};

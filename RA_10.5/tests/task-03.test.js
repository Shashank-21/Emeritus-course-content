const path = require("path");
const { defineClosure } = require(path.resolve(
  __dirname,
  "../task-03/task-03.solution.js"
));

describe("BookObject Tests - turnPage Function", () => {
  let BookObject;
  let myBook;

  beforeAll(() => {
    BookObject = defineClosure();
  });

  beforeEach(() => {
    myBook = BookObject("Test Book", 1);
  });

  test("turnPage should increment the currentPageNumber", () => {
    expect(myBook.getPage()).toBe(1);
    myBook.turnPage();
    expect(myBook.getPage()).toBe(2);
  });

  test("turnPage should increment currentPageNumber correctly after multiple calls", () => {
    for (let i = 0; i < 5; i++) {
      myBook.turnPage();
    }
    expect(myBook.getPage()).toBe(6);
  });
});

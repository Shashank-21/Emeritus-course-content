const path = require("path");
const { defineClosure } = require(path.resolve(
  __dirname,
  "../task-02/task-02.solution.js"
));

describe("BookObject Tests", () => {
  let BookObject;
  let myBook;

  beforeAll(() => {
    BookObject = defineClosure();
  });

  test("BookObject should be a function", () => {
    expect(typeof BookObject).toBe("function");
  });

  test("BookObject should create an object with getBookTitle and getPage methods", () => {
    myBook = BookObject("Test Book", 100);
    expect(typeof myBook.getBookTitle).toBe("function");
    expect(typeof myBook.getPage).toBe("function");
  });

  test("getPage should return the correct current page number", () => {
    myBook = BookObject("Test Book", 100);
    expect(myBook.getPage()).toBe(100);
  });

  test("getPage should return default page number if not provided", () => {
    const defaultBook = BookObject();
    expect(defaultBook.getPage()).toBe(1);
  });
});

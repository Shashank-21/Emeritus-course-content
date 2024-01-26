const path = require("path");
const { defineClosure } = require(path.resolve(
  __dirname,
  "../task-01/task-01.solution.js"
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

  test("BookObject should create an object with getBookTitle method", () => {
    myBook = BookObject("Test Book");
    expect(typeof myBook.getBookTitle).toBe("function");
  });

  test("getBookTitle should return the correct book name", () => {
    myBook = BookObject("Test Book");
    expect(myBook.getBookTitle()).toBe("Test Book");
  });

  test('getBookTitle should return "Default Book" if no name is provided', () => {
    const defaultBook = BookObject();
    expect(defaultBook.getBookTitle()).toBe("Default Book");
  });
});

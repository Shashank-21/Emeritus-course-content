const path = require("path");

let person1, person2, name1, name2;
try {
  ({ person1, person2, name1, name2 } = require(path.resolve(
    __dirname,
    "../task-03/task-03.js"
  )));
} catch (error) {
  console.error("Error importing variables:", error.message);
}

describe("Object Destructuring with Renaming Test", () => {
  test("Variables name1 and name2 should be defined", () => {
    expect(name1).toBeDefined();
    expect(name2).toBeDefined();
  });

  test("name1 should match the name property of person1 object", () => {
    expect(name1).toBe(person1.name);
  });

  test("name2 should match the name property of person2 object", () => {
    expect(name2).toBe(person2.name);
  });
});

const path = require("path");

// Import the variables from the main code file
let person, name, profession;
try {
  ({ person, name, profession } = require(path.resolve(
    __dirname,
    "../task-02/task-02.js"
  )));
} catch (error) {
  console.error("Error importing variables:", error.message);
}

describe("Object Destructuring Test", () => {
  test("Variables name and profession should be defined", () => {
    expect(name).toBeDefined();
    expect(profession).toBeDefined();
  });

  test("name should match the name property of the person object", () => {
    expect(name).toBe(person.name);
  });

  test("profession should match the profession property of the person object", () => {
    expect(profession).toBe(person.profession);
  });
});

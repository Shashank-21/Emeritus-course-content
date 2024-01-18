const path = require("path");

let colors, primaryColor, secondaryColor;
try {
  ({ colors, primaryColor, secondaryColor } = require(path.resolve(
    __dirname,
    "../task-01/task-01.solution.js"
  )));
} catch (error) {
  console.error("Error importing variables:", error.message);
}

describe("Array Destructuring Test", () => {
  if (
    typeof primaryColor !== "undefined" &&
    typeof secondaryColor !== "undefined"
  ) {
    test("primaryColor should be the first element of colors array", () => {
      expect(primaryColor).toBe(colors[0]);
    });

    test("secondaryColor should be the second element of colors array", () => {
      expect(secondaryColor).toBe(colors[1]);
    });
  } else {
    test("Variables primaryColor and secondaryColor should be defined", () => {
      expect(typeof primaryColor).not.toBe("undefined");
      expect(typeof secondaryColor).not.toBe("undefined");
    });
  }
});

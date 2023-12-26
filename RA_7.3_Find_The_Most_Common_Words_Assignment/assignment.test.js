const path = require("path");
const taskDirectory = path.resolve(__dirname, "");
const paragraphs = require(path.resolve(taskDirectory, "paragraphs.js"));
const wordCount = require(path.resolve(taskDirectory, "word-count.js"));

describe("Word count assignment test", () => {
  let paragraph, result, actualResult;
  beforeAll(() => {
    paragraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    const words = paragraph.replace(/[.,]/g, "").toLowerCase().split(/\s+/);
    const wordCountObj = words.reduce((acc, curr) => {
      if (!acc[curr]) {
        acc[curr] = 1;
      } else {
        acc[curr]++;
      }
      return acc;
    }, {});
    result = Object.entries(wordCountObj).sort((a, b) => b[1] - a[1]);
    actualResult = wordCount(paragraph);
  });

  test("Word count returns the right data type", () => {
    try {
      expect(actualResult.length).toBeDefined();
      expect(typeof actualResult).toBe("object");
    } catch (error) {
      throw new Error(
        "Are you returning an array of arrays by using `Object.entries` function?"
      );
    }
  });
  test("Word count has the right elements", () => {
    for (let i = 0; i < result.length; i++) {
      try {
        expect(actualResult[i]).toEqual(result[i]);
      } catch (error) {
        throw new Error(
          `Entry at index ${i} is expected to be ${JSON.stringify(
            result[i]
          )}, got ${JSON.stringify(actualResult[i])} instead.`
        );
      }
    }
  });
});

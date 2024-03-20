const fs = require("fs");
const path = require("path");

const taskDirectory = path.resolve(__dirname,'../../../task-01');

const htmlPath = path.resolve(taskDirectory, "index.html");
const cssPath = path.resolve(taskDirectory, "styles.css");

const jsPath = path.resolve(taskDirectory, "random-movement.js");

let htmlContent, stepSize, rectangleWidth, rectangleHeight;

describe("Ensure the variables are numbers", () => {
  beforeAll(() => {
    const cssContent = fs.readFileSync(cssPath, "utf-8");
    const styleTag = `<style>${cssContent}</style>`;
    htmlContent = fs.readFileSync(htmlPath, "utf-8");
    htmlContent = htmlContent.replace("<head>", `<head>${styleTag}`);

    document.body.innerHTML = htmlContent;

    const script = require(jsPath);
    stepSize = script.stepSize;  
  });

  test("stepSize should be a positive number", () => {
    expect(typeof stepSize).toBe("number");
    expect(stepSize).toBeGreaterThan(0);
  });
});

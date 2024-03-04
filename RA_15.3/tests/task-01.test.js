const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
// @ts-expect-error
global.TextDecoder = TextDecoder;
const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

describe("loadContent function call", () => {
  it('should call loadContent with "about.html" on clicking the element with id "about"', async () => {
    const htmlFilePath = path.join(__dirname, "../task-01/index.html");
    const htmlContent = fs.readFileSync(htmlFilePath, { encoding: "utf-8" });

    const scriptFilePath = path.join(
      __dirname,
      "../task-01/script.solution.js"
    ); // Adjust the file name as necessary
    const scriptContent = fs.readFileSync(scriptFilePath, {
      encoding: "utf-8",
    });

    const dom = new JSDOM(htmlContent, {
      runScripts: "dangerously",
      resources: "usable",
      url: "http://localhost", // Set a base URL for the JSDOM environment
    });

    const window = dom.window;
    const document = window.document;

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        text: () => Promise.resolve("Dummy content"),
      })
    );

    const scriptEl = document.createElement("script");
    scriptEl.textContent = scriptContent;
    document.body.appendChild(scriptEl);

    const aboutButton = document.getElementById("about");
    await new Promise((resolve) => {
      aboutButton.addEventListener("click", () => {
        window.loadContent("about.html").then(resolve);
      });
      aboutButton.click();
    });

    expect(global.fetch).toHaveBeenCalledWith("about.html");

    expect(document.getElementById("content").innerHTML).toBe("Dummy content");
  });
});

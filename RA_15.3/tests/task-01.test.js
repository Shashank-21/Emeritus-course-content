const { loadContent } = require("../task-01/script.js");

// Mock the global fetch function
global.fetch = jest.fn((url) =>
  Promise.resolve({
    text: () => Promise.resolve(`Mocked content for ${url}`),
  })
);

describe("loadContent function", () => {
  beforeEach(() => {
    document.body.innerHTML = ` <div id="content"></div>
    <button id="about">About</button>`;
    fetch.mockClear();
  });

  test("loads and displays content from a specified HTML file", async () => {
    const fileName = "about.html";
    await loadContent(fileName);

    expect(fetch).toHaveBeenCalledWith(fileName);

    expect(document.getElementById("content").innerHTML).toBe(
      `Mocked content for ${fileName}`
    );
  });
});

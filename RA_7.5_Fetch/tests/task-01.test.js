const path = require("path");
const fetchPosts = require(path.resolve(__dirname, "../task-01/task-01.js"));

// Mock global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([{ id: 1, title: "Test Post", body: "Test Body" }]),
  })
);

describe("fetchPosts", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("fetches posts and returns data", async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const errorMessage = "Error occurred";

    // Call fetchPosts and wait for the fetch to resolve
    const result = await new Promise((resolve) => {
      setTimeout(() => resolve(fetchPosts(url, errorMessage)), 100);
    });
    console.log(result);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual([{ id: 1, title: "Test Post", body: "Test Body" }]);
  });

  it("handles fetch error", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("Network error"));

    const url = "https://jsonplaceholder.typicode.com/badurl";
    const errorMessage = "Error occurred";

    // Call fetchPosts and wait for the fetch to resolve
    const result = await new Promise((resolve) => {
      setTimeout(() => resolve(fetchPosts(url, errorMessage)), 100);
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toBe(errorMessage);
  });
});

const path = require("path");
const fetchCatFacts = require(path.resolve(__dirname, "../task-01/task-01.js")); // Update this path

const mockCatFacts = [
  {
    status: {
      verified: true,
      sentCount: 1,
    },
    _id: "58e008780aac31001185ed05",
    user: "58e007480aac31001185ecef",
    text: "Owning a cat can reduce the risk of stroke and heart attack by a third.",
    __v: 0,
    source: "user",
    updatedAt: "2020-08-23T20:20:01.611Z",
    type: "cat",
    createdAt: "2018-03-29T20:20:03.844Z",
    deleted: false,
    used: false,
  },
];

// Mock global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockCatFacts),
  })
);

describe("fetchCatFacts", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("fetch has been called", async () => {
    const data = await fetchCatFacts();
    try {
      expect(fetch).toHaveBeenCalledTimes(1);
    } catch (error) {
      throw new Error("Have you called 'fetch' to fetch data from the api?");
    }
  });
  test("fetch is called with the right url", async () => {
    const data = await fetchCatFacts();
    try {
      expect(fetch).toHaveBeenCalledWith(
        "https://cat-fact.herokuapp.com/facts"
      );
    } catch (error) {
      throw new Error(
        "Have you made a call to the url `https://cat-fact.herokuapp.com/facts`?"
      );
    }
  });
  test("fetchCatFacts returns the correct data", async () => {
    const data = await fetchCatFacts();
    try {
      expect(data).toEqual(JSON.stringify(mockCatFacts));
    } catch (error) {
      throw new Error(
        "Did you call the JSON.stringify() function with data as its argument once you've retreived it?"
      );
    }
  });
});

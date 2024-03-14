const request = require("supertest");
const { app, close } = require("./index.solution.js");

describe("POST /message endpoint", () => {
  afterAll(() => close());
  test("should insert a new message and respond with success", async () => {
    const message = "This is a test message";

    const response = await request(app)
      .post("/message")
      .send({ message })
      .expect(201);

    expect(response.body).toEqual({
      success: "Message received and saved successfully",
      message,
    });
  });
});

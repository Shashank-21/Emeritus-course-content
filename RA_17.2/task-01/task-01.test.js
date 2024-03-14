const request = require("supertest");
const { app, close } = require("./index");

describe("GET /", () => {
  afterAll(() => {
    close();
  });
  it("Success status should be 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
  it("The message sent by the server must be `Connected successfully to MongoDB`", async () => {
    const res = await request(app).get("/");
    expect(res.text).toContain("Connected successfully to MongoDB");
  });
});

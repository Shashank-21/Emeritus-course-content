const supertest = require("supertest");
const { app, close } = require("../index");
const jwt = require("jsonwebtoken");
const SECRET_KEY =
  "2e2d87e33b8bed73b86837f73d15adba28a1bbba6e42281244c9ab861bcac0a220c05a0d5eb9f5f08715dad2bfbf64e7be724c48e44d94bda67e705628fb5d91e189c13b2359ce78abca3b3f0d28992533ff3537678448e226a486d45d804bec59c88004797a4f692625b37a0705132f09dcb61117ef22628994a70bf8039e42";

describe("POST /login", () => {
  let token;

  beforeAll(async () => {
    const validCredentials = {
      email: "admin@example.com",
      password: "admin123",
    };
    const response = await supertest(app).post("/login").send(validCredentials);
    token = response.body.token;
  });

  afterAll(() => {
    close();
  });

  test("should return a JWT token", () => {
    expect(token).toBeDefined();
  });

  test("should return a valid JWT token", () => {
    try {
      expect(() => {
        jwt.verify(token, SECRET_KEY);
      }).not.toThrow();
    } catch (error) {
      throw new Error(
        'Please check the line of code where `jwt.sign` was called. It should take 3 parameters. The first parameter is the `userData` object, the second parameter is the SECRET_KEY and the third parameter is an object that has the `expiresIn` key set to the value "1h"'
      );
    }
  });

  test("decoded token should have an id and role", () => {
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      expect(decoded.id).toBeDefined();
      expect(decoded.role).toBeDefined();
    } catch (error) {
      throw new Error(
        "Did you pass the userData object in the jwt.sign function?"
      );
    }
  });
});

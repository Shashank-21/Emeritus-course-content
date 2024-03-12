const supertest = require("supertest");
const jwt = require("jsonwebtoken");
const express = require("express");
const { verifyToken } = require("../verifyToken.solution");
const SECRET_KEY =
  "2e2d87e33b8bed73b86837f73d15adba28a1bbba6e42281244c9ab861bcac0a220c05a0d5eb9f5f08715dad2bfbf64e7be724c48e44d94bda67e705628fb5d91e189c13b2359ce78abca3b3f0d28992533ff3537678448e226a486d45d804bec59c88004797a4f692625b37a0705132f09dcb61117ef22628994a70bf8039e42";
const app = express();

app.get("/protected", verifyToken, (req, res) => {
  res.status(200).send("Access granted");
});

const generateToken = (payload) =>
  jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

describe("verifyToken middleware", () => {
  test("should grant access with a valid token", async () => {
    const token = generateToken({ id: 1, role: "user" });
    const response = await supertest(app)
      .get("/protected")
      .set("Authorization", token);

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Access granted");
  });

  test("should deny access without a token", async () => {
    const response = await supertest(app).get("/protected");

    expect(response.statusCode).toBe(403);
    expect(response.text).toBe("A token is required for authentication");
  });

  test("should deny access with an invalid token", async () => {
    const response = await supertest(app)
      .get("/protected")
      .set("Authorization", "invalidtoken");

    expect(response.statusCode).toBe(401);
    expect(response.text).toBe("Invalid Token");
  });
});

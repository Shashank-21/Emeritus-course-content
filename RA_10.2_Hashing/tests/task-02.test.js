const path = require("path");
const { randomBytes, scrypt: _scrypt } = require("crypto");
const { promisify } = require("util");
const scryptAsync = promisify(_scrypt);
const { verifyPassword } = require(path.resolve(
  __dirname,
  "../task-02/task-02.js"
));

describe("verifyPassword", () => {
  let correctPassword, incorrectPassword, salt, hashedPassword, storedPassword;

  beforeEach(async () => {
    correctPassword = "correctPassword";
    incorrectPassword = "incorrectPassword";
    salt = randomBytes(16).toString("hex");
    hashedPassword = (await scryptAsync(correctPassword, salt, 64)).toString(
      "hex"
    );
    storedPassword = `${salt}.${hashedPassword}`;
  });

  it("should return true for a correct password", async () => {
    try {
      const result = await verifyPassword(storedPassword, correctPassword);
      expect(result).toBe(true);
    } catch (error) {
      throw new Error(
        "Expected verifyPassword to return true for a correct password, but it failed."
      );
    }
  });

  it("should return false for an incorrect password", async () => {
    try {
      const result = await verifyPassword(storedPassword, incorrectPassword);
      expect(result).toBe(false);
    } catch (error) {
      throw new Error(
        "Expected verifyPassword to return false for an incorrect password, but it returned true."
      );
    }
  });
});

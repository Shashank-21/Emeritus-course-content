const path = require("path");
const { hashPassword } = require(path.resolve(
  __dirname,
  "../task-01/task-01.js"
));

describe("hashPassword function", () => {
  it("should return a defined value", async () => {
    try {
      const password = "testPassword";
      const hashedPassword = await hashPassword(password);
      expect(hashedPassword).toBeDefined();
    } catch (error) {
      throw new Error(
        "The hashPassword function should return a value, but it returned undefined or null."
      );
    }
  });

  it("should return a string", async () => {
    try {
      const password = "testPassword";
      const hashedPassword = await hashPassword(password);
      expect(typeof hashedPassword).toBe("string");
    } catch (error) {
      throw new Error(
        "The hashPassword function should return a string. Check if the return type is correct."
      );
    }
  });

  it("should return a string with a salt and a hash separated by a dot", async () => {
    try {
      const password = "testPassword";
      const hashedPassword = await hashPassword(password);
      const parts = hashedPassword.split(".");
      expect(parts.length).toBe(2);
    } catch (error) {
      throw new Error(
        "The hashPassword function should return a salt and hash separated by a dot. Ensure the function concatenates the salt, a dot, and the hash."
      );
    }
  });

  it("should return a salt and hash of correct length", async () => {
    try {
      const password = "testPassword";
      const hashedPassword = await hashPassword(password);
      const [salt, hash] = hashedPassword.split(".");
      expect(salt).toHaveLength(32); // Assuming a 16-byte salt in hex
      expect(hash).toHaveLength(128); // Assuming a 64-byte hash in hex
    } catch (error) {
      throw new Error(
        "The salt or hash is not of the expected length. Did you use '64' as the third parameter in the `scrypt` function or not?"
      );
    }
  });
});

const { randomBytes, scrypt: _scrypt } = require("crypto");
const { promisify } = require("util");
const scrypt = promisify(_scrypt);

async function hashPassword(password) {
  // This line generates a salt, which is used for hashing.
  const salt = randomBytes(16).toString("hex");

  // Todo: Hash the password along with the salt using the 'scrypt' function. Enter the number '64' for the length of the key.
  const hash = await scrypt(password, salt, 64);

  // The next lines combine the salt and the hash and return the
  const result = salt + "." + hash.toString("hex");
  return result;
}

// Don't change this line
module.exports = { hashPassword };

const { scrypt: _scrypt } = require("crypto");
const { promisify } = require("util");
const scrypt = promisify(_scrypt);

async function verifyPassword(storedPassword, inputPassword) {
  // Todo: Extract the salt from the storedPassword

  // Todo: Hash the inputPassword using the extracted salt

  // Compare the resulting hash with the storedHash
  const inputHash = hashedPassword.toString("hex");
  return inputHash === storedHash;
}

module.exports = { verifyPassword };

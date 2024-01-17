const { randomBytes, scrypt: _scrypt } = require("crypto");
const { promisify } = require("util");
const scrypt = promisify(_scrypt);

async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = await scrypt(password, salt, 64);
  const result = salt + "." + hash.toString("hex");
  return result;
}

module.exports = { hashPassword };

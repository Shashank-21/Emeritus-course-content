const { hashPassword } = require("./pre-task.js");
const { verifyPassword } = require("./task-02.js");

async function runVerification() {
  const storedPassword1 = await hashPassword("correctPassword");
  const storedPassword2 = await hashPassword("anotherPassword");

  const inputPasswordMatch = "correctPassword";
  const inputPasswordNoMatch = "incorrectPassword";

  const doesMatch1 = await verifyPassword(storedPassword1, inputPasswordMatch);
  console.log("First password match:", doesMatch1); // Expected: true

  const doesMatch2 = await verifyPassword(
    storedPassword2,
    inputPasswordNoMatch
  );
  console.log("Second password match:", doesMatch2); // Expected: false
}

runVerification();

const { hashPassword } = require("./task-01.solution.js");

async function runHashing(password) {
  const hashedPassword = await hashPassword(password);
  console.log(
    "****************************************************************"
  );
  console.log("Given Password:", password);
  console.log(
    "****************************************************************"
  );
  console.log("Hashed Password:", hashedPassword);
  console.log(
    "****************************************************************"
  );
}

runHashing("123ABC");
runHashing("2#qiow3u1132#");

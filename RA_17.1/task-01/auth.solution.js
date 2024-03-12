const express = require("express");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const users = JSON.parse(fs.readFileSync("users.json", "utf8"));
const SECRET_KEY =
  "2e2d87e33b8bed73b86837f73d15adba28a1bbba6e42281244c9ab861bcac0a220c05a0d5eb9f5f08715dad2bfbf64e7be724c48e44d94bda67e705628fb5d91e189c13b2359ce78abca3b3f0d28992533ff3537678448e226a486d45d804bec59c88004797a4f692625b37a0705132f09dcb61117ef22628994a70bf8039e42";

router.post("/", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    const userData = { id: user.id, role: user.role };
    const token = jwt.sign(userData, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    res.status(401).send("Authentication failed");
  }
});

module.exports = router;

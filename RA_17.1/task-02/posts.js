const express = require("express");
const fs = require("fs");
const router = express.Router();
const { verifyToken } = require("./verifyToken");

let posts = JSON.parse(fs.readFileSync("posts.json", "utf8"));

router.use(verifyToken);

router.get("/", (req, res) => {
  res.send(posts);
});

module.exports = router;

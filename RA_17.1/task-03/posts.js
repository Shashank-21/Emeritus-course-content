const express = require("express");
const fs = require("fs");
const router = express.Router();
const { verifyToken, isAdmin } = require("./verifyToken.solution");

let posts = JSON.parse(fs.readFileSync("posts.json", "utf8"));

router.use(verifyToken);

router.post("/create", isAdmin, (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };

  posts.push(post);
  fs.writeFileSync("posts.json", JSON.stringify(posts, null, 2));
  res.status(201).send(post);
});

router.put("/edit/:id", isAdmin, (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;

  fs.writeFileSync("posts.json", JSON.stringify(posts, null, 2));
  res.send(post);
});

router.delete("/delete/:id", isAdmin, (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).send("Post not found");

  posts.splice(postIndex, 1);
  fs.writeFileSync("posts.json", JSON.stringify(posts, null, 2));
  res.send({ message: "Post deleted" });
});

router.get("/", (req, res) => {
  res.send(posts);
});

module.exports = router;

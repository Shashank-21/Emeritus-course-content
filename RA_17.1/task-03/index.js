const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./auth");
const postRoutes = require("./posts");

const app = express();
app.use(bodyParser.json());

app.use("/login", authRoutes);
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const close = () => {
  server.close();
};

module.exports = { app, close };

const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./auth.solution");

const app = express();
app.use(bodyParser.json());

app.use("/login", authRoutes);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const close = () => {
  server.close();
};

module.exports = { app, close };

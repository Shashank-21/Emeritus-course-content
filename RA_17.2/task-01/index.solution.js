const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const port = 3000;
const mongoUrl = "mongodb://localhost:27017";
const dbName = "testDb";

app.get("/", async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoUrl);
    res.status(200).send("Connected successfully to MongoDB");
    await client.close();
  } catch (err) {
    console.error("An error occurred connecting to MongoDB:", err);
    res.status(500).send("Failed to connect to MongoDB");
  }
});

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const close = () => {
  server.close();
};

module.exports = { app, close };

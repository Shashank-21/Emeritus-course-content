const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const port = 3000;
const mongoUrl = "mongodb://localhost:27017";
const dbName = "testDb";

app.get("/", async (req, res) => {
  try {
    // Connect to MongoDB using MongoClient.connect and the provided mongoUrl. Use `await` in front of the code, and save the output to the variable `client`.
    // Todo: Send a successful response (status code 200) with a message indicating a successful connection to MongoDB.
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

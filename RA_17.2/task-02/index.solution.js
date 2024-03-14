const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const port = 3000;
const mongoUrl = "mongodb://localhost:27017";
const dbName = "tempDb";

async function connectToDb() {
  try {
    const client = await MongoClient.connect(mongoUrl);
    console.log("Connected to MongoDB successfully");
    return client;
  } catch (err) {
    console.error("An error occurred connecting to MongoDB:", err);
    throw err;
  }
}

app.get("/", async (req, res) => {
  try {
    const client = await connectToDb();
    res
      .status(200)
      .send("Connected successfully to MongoDB (or server is running)");
    await client.close();
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).send("Failed to connect to MongoDB (or server error)");
  }
});

app.post("/message", async (req, res) => {
  try {
    console.log(req.body);
    const message = req.body.message;
    console.log("Received message:", message);
    const client = await connectToDb();
    const db = client.db(dbName);
    const collection = db.collection("messages");
    await collection.insertOne({ message });

    await client.close();

    res
      .status(201)
      .json({ success: "Message received and saved successfully", message });
  } catch (err) {
    console.log(err);
    res.status(500).send("Failed to process message");
  }
});

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const close = () => {
  server.close();
};

module.exports = { app, close };

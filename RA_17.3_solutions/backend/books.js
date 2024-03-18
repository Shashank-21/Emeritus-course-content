const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();

const mongoUrl = "mongodb://localhost:27017";
const dbName = "bookReviewsApp";

async function connectToDB() {
  const client = await MongoClient.connect(mongoUrl);
  return client;
}

router.get("/", async (req, res) => {
  const client = await connectToDB();
  const db = client.db(dbName);
  const collection = db.collection("books");

  const books = await collection
    .find({}, { projection: { reviews: 0 } })
    .toArray();
  res.json(books);
  client.close();
});

router.get("/:id", async (req, res) => {
  const client = await connectToDB();
  const db = client.db(dbName);
  const collection = db.collection("books");

  const book = await collection.findOne({ _id: new ObjectId(req.params.id) });
  if (!book) {
    res.status(404).send("Book not found");
  } else {
    res.json(book);
  }
  client.close();
});

router.post("/:id/reviews", async (req, res) => {
  const client = await connectToDB();
  const db = client.db(dbName);
  const collection = db.collection("books");

  const review = req.body.review;
  if (!review) {
    res.status(400).send("Review content is required");
  } else {
    const updateResult = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $push: { reviews: review } }
    );

    if (updateResult.matchedCount === 0) {
      res.status(404).send("Book not found");
    } else {
      res.status(201).send("Review added");
    }
  }
  client.close();
});

module.exports = router;

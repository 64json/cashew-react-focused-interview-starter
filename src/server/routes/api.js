const express = require("express");
const router = express.Router();
const {db} = require('../adapters/postgres');

// Sample code to show syntax, not relevant to application but should help get started

/* GET users listing. */
router.get("/flashcards", async function (req, res, next) {
  const dataResults = await db.query('select * from flashcards');
  res.send({flashcards: dataResults});
});

/* POST users listing. */
router.post("/flashcards", async function (req, res, next) {
  const {term, definition} = req.body;
  await db.query(`insert into flashcards (term, definition) values ('${term}', '${definition}')`);
  res.sendStatus(200);
});

// Begin coding here

module.exports = router;

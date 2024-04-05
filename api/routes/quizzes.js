const { error } = require("console");
const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", async (req, res) => {
  // Read the JSON file
  try {
    const data = await fs.readFile("../Api/data.json", "utf8");
    res.json(data);
  } catch (e) {
    console.error(error);
    res.json(500).send(error.message);
  }
});

module.exports = router;

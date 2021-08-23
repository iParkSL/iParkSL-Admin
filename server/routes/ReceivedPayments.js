const express = require('express');
const router = express.Router();
const { ReceivedPayments } = require('../models');

router.get("/", async (req, res) => {
  const listOfReceivedPayments = await ReceivedPayments.findAll();
  res.json(listOfReceivedPayments);
});

module.exports = router;
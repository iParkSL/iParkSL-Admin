const express = require("express");
const router = express.Router();
const { ReceivedPayments } = require("../models");
const { Op } = require("sequelize");

router.post("/", async (req, res) => {
    
    const { fromDate, toDate } = req.body;
    const listOfReceivedPayments = await ReceivedPayments.findAll({
      where: {
        createdAt: {
          [Op.between]: [fromDate, toDate],
        },
      },
    });
    res.json(listOfReceivedPayments);
    
});

module.exports = router;

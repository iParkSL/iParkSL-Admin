const express = require("express");
const router = express.Router();
const { Customers } = require("../models");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
    const listOfCustomers = await Customers.findAll({
      where: {
        createdAt: {
          [Op.between]: [fromDate, toDate],
        },
      },
    });
  res.json(listOfCustomers);
});

module.exports = router;

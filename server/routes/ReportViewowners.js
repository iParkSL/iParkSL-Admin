const express = require("express");
const router = express.Router();
const { Viewowners } = require("../models");
const { Op } = require("sequelize");

router.post("/", async (req, res) => {
     const { fromDate, toDate } = req.body;
    const listOfOwners = await Viewowners.findAll({
      where: {
        createdAt: {
          [Op.between]: [fromDate, toDate],
        },
      },
    });
  res.json(listOfOwners);
});

module.exports = router;
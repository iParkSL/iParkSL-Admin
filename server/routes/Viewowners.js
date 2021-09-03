const express = require("express");
const router = express.Router();
const { Viewowners } = require("../models");

router.get("/", async (req, res) => {
  const listOfOwners = await Viewowners.findAll();
  res.json(listOfOwners);
});

router.delete("/byId/:id", async (req, res) => {
  const id = req.params.id;
  await Viewowners.destroy({
    where: {
      id: id,
    },
  });

  res.json("Delete Successfully");
});

router.get("/findrequests", async (req, res) => {
  const numberofowners = await Viewowners.findAndCountAll();
  res.json(numberofowners);
});

module.exports = router;
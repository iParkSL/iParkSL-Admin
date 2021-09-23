const express = require('express');
const router = express.Router();
const { Owners } = require("../models");

router.get("/", async(req, res)=>{
    const listOfOwners = await Owners.findAll();
    res.json(listOfOwners);
});

router.get("/byId/:id", async (req, res)=>{
    const id = req.params.id;
    const owner = await Owners.findByPk(id);
    res.json(owner);
});

router.get("/findrequests", async (req, res) => {
  const numberofreq = await Owners.findAndCountAll();
  res.json(numberofreq);
});



module.exports = router;
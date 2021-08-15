const express = require('express');
const router = express.Router();
const { Owners } = require("../models");

router.get("/", async(req, res)=>{
    const listOfOwners = await Owners.findAll();
    res.json(listOfOwners);
});

module.exports = router;
const express = require("express");
const router = express.Router();
const { ParkRequests } = require("../models");

router.get("/byId/:id", async (req, res)=>{
    const id = req.params.id;
    const ParkRequest = await ParkRequests.findOne({where: {OwnerId : id}});
    res.json(ParkRequest);
});

module.exports = router;
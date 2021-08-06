const express = require('express');
const router = express.Router();
const {Admin} = require('../models');

router.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const user = await Admin.findOne({where: {username: username, password: password}});

    if(!user){
        res.json({error: 'No user found'});
    }
    else{
        res.json("You are logged in")
    }
});

module.exports = router;
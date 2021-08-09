const express = require('express');
const router = express.Router();
const {Admin} = require('../models');
const bcrypt = require('bcrypt');

router.post("/", async (req, res)=>{
    const {username, password } = req.body;
    bcrypt.hash(password, 10).then((hash)=> {
        Admin.create({
            username : username,
            password: hash,
        });
        res.json("SUCCESS");
    });
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const user = await Admin.findOne({where: {username: username}});

    if(!user) res.json({error: 'No user found'});

    bcrypt.compare(password, user.password).then((match)=>{
        if(!match) res.json({error: "Wrong Username and password combination"});

        res.json("YOU LOGGED IN!!!");
    });
    
});

module.exports = router;

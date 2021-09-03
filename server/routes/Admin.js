const express = require('express');
const router = express.Router();
const {Admin} = require('../models');
const bcrypt = require('bcrypt');
const {validateToken} = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

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

        const accessToken = sign(
            {username: user.username, id: user.id},
            "iparkslsecret"
        );
        res.json(accessToken);
    });
    
});

router.get("/getdetails", async (req, res) => {
  const admindetails = await Admin.findAll();
  res.json(admindetails);
});

router.get("/auth", validateToken, (req, res)=>{
    res.json(req.user);
});

module.exports = router;

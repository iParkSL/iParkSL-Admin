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



router.get("/auth", validateToken, (req, res)=>{
    res.json(req.user);
});

router.put("/changepassword",validateToken, async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    try {
        const user = await Admin.findOne({
          where: { username: req.user.username },
        });
        bcrypt.compare(oldPassword, user.password).then((match) => {
          if (!match) res.json({ error: "Wrong Password Entered!" });

          bcrypt.hash(newPassword, 10).then((hash) => {
            Admin.update(
              {
                password: hash,
              },
              { where: { username: req.user.username } }
            );
            res.json("SUCCESS");
          });
        });
    } catch (error) {
        console.log(error);
    }
    
    

    
});

module.exports = router;

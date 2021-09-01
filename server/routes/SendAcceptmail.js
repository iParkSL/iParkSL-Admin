const express = require("express");
const router = express.Router();
// const app = express;
// const core = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/send", async (req, res) => {
  const { email, message } = req.body;
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  // console.log(req.body.email);

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: req.body.email,
    subject: "Confirmation Requested Park",
    // text: req.body.message
    html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
        ">
        <h2>Congratulations!</h2>
        <p>${message}</p>

        <p>All the best</p>
        <address>
            Further More<a href="mailto:iparksrilanka@gmail.com">iParkSL</a>.<br>
            Visit us at:<br>
            iParkSL.lk<br>
            Box 1, Temple Rd<br>
            Colombo 7
        </address>
         </div>`,
  });
});

router.post("/sendreject", async (req, res) => {
  const { email, message } = req.body;
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  // console.log(req.body.email);

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: req.body.email,
    subject: "About Requested Park",
    // text: req.body.message
    html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
        ">
        <h2>Sad To Say</h2>
        <p>${message}</p>

        
        <address>
            Further More<a href="mailto:iparksrilanka@gmail.com">iParkSL</a>.<br>
            Visit us at:<br>
            iParkSL.lk<br>
            Box 1, Temple Rd<br>
            Colombo 7
        </address>
         </div>`,
  });
});

module.exports = router;

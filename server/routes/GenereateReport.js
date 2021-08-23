const express = require("express");
const router = express.Router();
const pdf = require("html-pdf");
// const pdfTemplate = require("../documents");

router.post("/create-pdf", async (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

router.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

module.exports = router;

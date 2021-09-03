const express = require("express");
const router = express.Router();
const { Customers } = require("../models");

router.get("/", async (req, res) => {
  const listOfCustomers = await Customers.findAll();
  res.json(listOfCustomers);
});

router.delete("/byId/:id", async (req, res) => {
  const id = req.params.id;
    await Customers.destroy({
        where: {
            id: id,
        }
    });

    res.json("Delete Successfully");
});

router.get("/findcustomers", async (req, res) => {
    const numberofcus = await Customers.findAndCountAll();
    res.json(numberofcus);
})

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const { Customers } = require("../models");
// const { Op } = require("sequelize");

// router.get("/", async (req, res) => {
//     const listOfCustomers = await Customers.findAll({
//       where: {
//         createdAt: {
//           [Op.between]: [fromDate, toDate],
//         },
//       },
//     });
//   res.json(listOfCustomers);
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const { Customers } = require("../models");
const { Op } = require("sequelize");

router.post("/", async (req, res) => {
  const { fromDate, toDate } = req.body;
  const listOfCustomers = await Customers.findAll({
    where: {
      createdAt: {
        [Op.between]: [fromDate, toDate],
      },
    },
  });
  res.json(listOfCustomers);
});

module.exports = router;

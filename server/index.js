const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

const db = require('./models');



//Routers
const adminRouter = require("./routes/Admin");
app.use("/auth", adminRouter);

const ownerRouter = require("./routes/Owners");
app.use("/owners", ownerRouter);

const requestRouter = require("./routes/ParkRequests");
app.use("/req", requestRouter);

const paymentsRouter = require("./routes/ReceivedPayments");
app.use("/receivedpayments", paymentsRouter);

const genereateReportRouter = require("./routes/GenereateReport");
app.use("/generatereport", genereateReportRouter);

const sendMailRouter = require("./routes/SendAcceptmail");
app.use("/sendconfirm", sendMailRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log("server running on port 3001");
    });
});
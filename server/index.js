const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

const db = require('./models');



//Routers
const adminRouter = require("./routes/Admin");
app.use("/auth", adminRouter);

const ownerreqRouter = require("./routes/Owners");
app.use("/owners", ownerreqRouter);

const customerRouter = require("./routes/Customers");
app.use("/customers", customerRouter);

const viewownersRouter = require("./routes/Viewowners");
app.use("/viewowners", viewownersRouter);

const reportviewownersRouter = require("./routes/ReportViewowners");
app.use("/reportviewowners", reportviewownersRouter);

const requestRouter = require("./routes/ParkRequests");
app.use("/req", requestRouter);

const paymentsRouter = require("./routes/ReceivedPayments");
app.use("/receivedpayments", paymentsRouter);

const reportpaymentsRouter = require("./routes/ReportReceivedPayments");
app.use("/reportreceivedpayments", reportpaymentsRouter);

const genereateReportRouter = require("./routes/GenereateReport");
app.use("/generatereport", genereateReportRouter);

const sendMailRouter = require("./routes/SendAcceptmail");
app.use("/sendconfirm", sendMailRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log("server running on port 3001");
    });
});
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

//Routers
const adminRouter = require("./routes/Admin");
app.use("/auth", adminRouter);


db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log("server running on port 3001");
    });
});
require('dotenv').config()
const express = require("express") 
const app = express()
const cors = require('cors')
const userRout = require("./modules/userModule/userRouter")
const dbConfig = require('./Config/dbConnection')
const adminRouter = require("./modules/admin/adminRouter")
const categpryRoute = require('./modules/category.js/categoryRouter')
const subRouter = require("./modules/SubCategory/subRouter")
const productRoute = require("./modules/productModule/productRouter")
const cloudRoute = require("./modules/cloud/cloudRouter")
const cupon = require("./modules/Cupon/cuponRouter")
const bodyparser = require("body-parser")
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(express.json({limit: '50mb'}));
  app.use(express.urlencoded({limit: '50mb'}));
app.use("/api",userRout)
app.use("/api",adminRouter)
app.use("/api",categpryRoute)
app.use("/api",subRouter)
app.use("/api",productRoute)
app.use("/api",cloudRoute)
app.use("/api",cupon)

app.listen(process.env.PORT, () => {
    console.log(`1, Server running at port no. ${process.env.PORT} in  mode.`);
    dbConfig.connectDb()
})
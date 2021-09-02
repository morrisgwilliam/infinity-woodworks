const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const bodyParser = require("body-parser")
const express = require("express");
const router = require("./routes/router");
// const AWS = require("aws-sdk")

const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.use("/", router);

app.listen(3000, () => {
    console.log("Express Application Started\n")
})

module.exports = app;
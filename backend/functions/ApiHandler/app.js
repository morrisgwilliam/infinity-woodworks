const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const bodyParser = require("body-parser")
const express = require("express");
const router = require("./routes/router");
const dyanamoose = require("dynamoose");
// const AWS = require("aws-sdk")

// var dynamodb = new AWS.DynamoDB({correctClockSkew: true});
const ddb = new dyanamoose.aws.sdk.DynamoDB({correctClockSkew: true});
dyanamoose.aws.ddb.set(ddb)
const dynamoose = require("dynamoose")

dynamoose.logger.providers.set(console)

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
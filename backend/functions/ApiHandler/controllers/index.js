const process = require('process');
const twilioService = require("../services/twilio");

const sendReschedulingEmail = async (req, res) => {
    // https://developers.acuityscheduling.com/reference#get-appointments
    try {
        process.stdout.write("\nINFO ------ LOGGING REQUEST BODY ------\n" + JSON.stringify(req.body) + "\n\n");
        
        await twilioService.sendQuoteEmail(req.body);
        res.statusCode = 200;
        const payload = {};
        process.stdout.write("\nINFO ------ LOGGING RESPONSE PAYLOAD ------\n" + JSON.stringify(payload) + "\n\n");
        res.json(payload)
    } catch (error) {
        process.stdout.write("\nERROR ------ HANDLING REQUEST ------\n" + JSON.stringify(error.stack) + "\n\n")
        res.statusCode = 500;
        const payload = {
            stack: error.stack,
            message: error.message
        }
        res.json(payload)
    }
}

module.exports = {
    sendReschedulingEmail
}
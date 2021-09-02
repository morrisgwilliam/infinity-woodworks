const process = require('process');
const accuityService = require("../services/accuity");
const twilioService = require("../services/twilio");
const secretsManager = require("../services/secretsManager");
const applications = require("./applications");



const createApplication = async (req, res) => {
    // https://developers.acuityscheduling.com/reference#get-appointments
    try {
        process.stdout.write("\nINFO ------ LOGGING REQUEST BODY ------\n" + JSON.stringify(req.body) + "\n\n");
        const secret = await secretsManager.getSecret(secretsManager.secretNames.accunet);

        if(!req.headers["x-api-key"] && !req.headers["x-api-key"] !== secret["Api-Key"]){
            throw new Error("api key not supplied or invalid")
        }

        const newApplication = {
            CellPhone: req.body.properties["bor1_Phone"],
            FirstName: req.body.properties["bor1_FirstName"],
            LastName: req.body.properties["bor1_LastName"],
            Email: req.body.properties["bor1_Email"],
            Borrower2_FirstName: req.body.properties["bor2_FirstName"],
            Borrower2_LastName: req.body.properties["bor2_LastName"],
            LoanConsultant: req.body.properties["loan_Consultant"],
            LoanPurpose: req.body.properties["loan_Purpose"],
            FirstCloseDate: req.body.properties["first_Close_Date"],
            LastCloseDate: req.body.properties["last_Close_Date"],
            ClosingGoal: req.body.properties["closing_Goal"],
            ClosingGoalExplained: req.body.properties["closing_Goal_Explained"],
            CashBackAmount: req.body.properties["cash_Back_Amount"],
            InterestRate: req.body.properties["interest_Rate"],
            LoanAmount: req.body.properties["loan_Amount"],
            EscrowPreference: req.body.properties["escrow_Preference"]
        }

        const payload = await applications.createApplication(newApplication);

        res.statusCode = 201;
        process.stdout.write("\nINFO ------ LOGGING RESPONSE PAYLOAD ------\n" + JSON.stringify(payload) + "\n\n");
        res.json(payload);
    } catch (error) {
        process.stdout.write("\nERROR ------ HANDLING REQUEST ------\n" + JSON.stringify(error.stack) + "\n\n")
        res.statusCode = 500;
        const payload = {
            stack: error.stack,
            message: error.message
        };
        res.json(payload);
    }
}
const getApplication = async (req, res) => {
    // https://developers.acuityscheduling.com/reference#get-appointments
    try {
        process.stdout.write("\nINFO ------ LOGGING REQUEST BODY ------\n" + JSON.stringify(req.body) + "\n\n");

        const payload = await applications.getByCellPhone(req.query.cellphone);
        res.statusCode = 200;
        process.stdout.write("\nINFO ------ LOGGING RESPONSE PAYLOAD ------\n" + JSON.stringify(payload) + "\n\n");
        res.json(payload);
    } catch (error) {
        process.stdout.write("\nERROR ------ HANDLING REQUEST ------\n" + JSON.stringify(error.stack) + "\n\n")
        res.statusCode = 500;
        const payload = {
            stack: error.stack,
            message: error.message
        };
        res.json(payload);
    }
}
const getAppointments = async (req, res) => {
    // https://developers.acuityscheduling.com/reference#get-appointments
    try {
        process.stdout.write("\nINFO ------ LOGGING REQUEST BODY ------\n" + JSON.stringify(req.body) + "\n\n");
        const payload = await accuityService.getAppointments();
        res.statusCode = 200;
        process.stdout.write("\nINFO ------ LOGGING RESPONSE PAYLOAD ------\n" + JSON.stringify(payload) + "\n\n");
        res.json(payload);
    } catch (error) {
        process.stdout.write("\nERROR ------ HANDLING REQUEST ------\n" + JSON.stringify(error.stack) + "\n\n")
        res.statusCode = 500;
        const payload = {
            stack: error.stack,
            message: error.message
        };
        res.json(payload);
    }
}
const getClosingAppointmentDetails = async (req, res) => {
    try {
        process.stdout.write("\nINFO ------ LOGGING REQUEST BODY ------\n" + JSON.stringify(req.body) + "\n\n");
        const payload = await accuityService.getLoanClosingAppointmentDetails();
        res.statusCode = 200;
        process.stdout.write("\nINFO ------ LOGGING RESPONSE PAYLOAD ------\n" + JSON.stringify(payload) + "\n\n");
        res.json(payload);
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
const createAppointment = async (req, res) => {
    // https://developers.acuityscheduling.com/reference#get-appointments
    try {
        process.stdout.write("\nINFO ------ LOGGING REQUEST BODY ------\n" + JSON.stringify(req.body) + "\n\n");

        const payload = await accuityService.createLoanClosingAppointment(req.body);
        res.statusCode = 200;
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
const getAppointmentAvailableTimes = async (req, res) => {
    // https://developers.acuityscheduling.com/reference#get-appointments
    try {
        process.stdout.write("\nINFO ------ LOGGING REQUEST BODY ------\n" + JSON.stringify(req.body) + "\n\n");
        const date = req.query.date
        const appointmentType = accuityService.appointmentTypeIds[req.query.appointmentType]
        if(!date || !appointmentType) throw new Error("Please provide a month and appointmentTypeID in your request.")
        
        const payload = await accuityService.getAppointmentAvailableTimes(date, appointmentType);
        res.statusCode = 200;
        process.stdout.write("\nINFO ------ LOGGING RESPONSE PAYLOAD ------\n" + JSON.stringify(payload) + "\n\n");
        res.json(payload)
    } catch (error) {
        process.stdout.write("\nERROR ------ HANDLING REQUEST ------\n" + JSON.stringify(error.stack) + "\n\n")
        res.statusCode = error.status_code || 500;
        const payload = {
            stack: error.stack,
            message: error.message
        }
        res.json(payload)
    }
}
const getAppointmentAvailableDates = async (req, res) => {
    // https://developers.acuityscheduling.com/reference#get-appointments
    try {
        process.stdout.write("\nINFO ------ LOGGING REQUEST BODY ------\n" + JSON.stringify(req.body) + "\n\n");
        const month = req.query.month
        const appointmentType = accuityService.appointmentTypeIds[req.query.appointmentType]
        if(!month || !appointmentType) throw new Error("Please provide a month and appointmentTypeID in your request.")
        
        const payload = await accuityService.getAppointmentAvailableTimes(month, appointmentType);
        res.statusCode = 200;
        process.stdout.write("\nINFO ------ LOGGING RESPONSE PAYLOAD ------\n" + JSON.stringify(payload) + "\n\n");
        res.json(payload)
    } catch (error) {
        process.stdout.write("\nERROR ------ HANDLING REQUEST ------\n" + JSON.stringify(error.stack) + "\n\n")
        res.statusCode = 500;
        const payload = {
            stack: error.stack,
            message: error.messagea
        }
        res.json(payload)
    }
}
const sendReschedulingEmail = async (req, res) => {
    // https://developers.acuityscheduling.com/reference#get-appointments
    try {
        process.stdout.write("\nINFO ------ LOGGING REQUEST BODY ------\n" + JSON.stringify(req.body) + "\n\n");
        
        await twilioService.sendNoTimesFoundEmail(req.body);
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
    getAppointments,
    createAppointment,
    getAppointmentAvailableTimes,
    getAppointmentAvailableDates,
    createApplication,
    getApplication,
    getClosingAppointmentDetails,
    sendReschedulingEmail
}
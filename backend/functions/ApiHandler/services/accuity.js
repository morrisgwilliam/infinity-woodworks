
const Acuity = require('acuityscheduling');
const secretsManager = require("./secretsManager")

const appointmentTypeIds = {
    LOAN_CLOSING: process.env.ENV === "DEV" ? 23138566 : 24436570
}


const getLoanClosingAppointmentDetails = async () => {
    try {
        const secret = await secretsManager.getSecret(secretsManager.secretNames.accuity)
        const acuity = Acuity.basic({
            userId: secret.userId,
            apiKey: secret.apiKey
          });
        let promise = await new Promise((resolve, reject) => {
            acuity.request('/appointment-types', function (err, res, appointmentTypes) {
                console.error("Response from accuity closing appointment details!!!!", err,res,appointmentTypes)
                if (err) reject(err);
                resolve(appointmentTypes)
            })
        })
        return promise;
    } catch (error) {
        console.error("Unable to retrieve appointments", error)
        throw error;
    }
}
const getAppointmentAvailableTimes = async (date, appointmentTypeID) => {
    try {
        //const appointmentTypeID = appointmentTypeIds[appointmentType]
        const secret = await secretsManager.getSecret(secretsManager.secretNames.accuity)
        const acuity = Acuity.basic({
            userId: secret.userId,
            apiKey: secret.apiKey
          });
        let promise = await new Promise((resolve, reject) => {
            acuity.request('/availability/times?date=' + date + '&appointmentTypeID=' + appointmentTypeID, function (err, res, dates) {
                console.error("Response from accuity avilable times!!!!", err,res,dates)
                if (dates.status_code >= 400) reject(dates);
                resolve(dates)
            })
        })
        return promise;
    } catch (error) {
        console.error("Unable to retrieve appointments", error)
        throw error;
    }
}
const getAppointmentAvailableDates = async (month, appointmentTypeID) => {
    try {
        //const appointmentTypeID = appointmentTypeIds[appointmentType]
        const secret = await secretsManager.getSecret(secretsManager.secretNames.accuity)
        const acuity = Acuity.basic({
            userId: secret.userId,
            apiKey: secret.apiKey
          });
        let promise = await new Promise((resolve, reject) => {
            acuity.request('/availability/times?month=' + month + '&appointmentTypeID=' + appointmentTypeID, function (err, res, dates) {
                if (dates.status_code === 400) reject(dates);
                resolve(dates)
            })
        })
        return promise;
    } catch (error) {
        console.error("Unable to retrieve appointments", error)
        throw error;
    }
}
const getAppointments = async () => {
    try {
        const secret = await secretsManager.getSecret(secretsManager.secretNames.accuity)
        const acuity = Acuity.basic({
            userId: secret.userId,
            apiKey: secret.apiKey
          });
        let promise = await new Promise((resolve, reject) => {
            acuity.request('/appointments', function (err, res, appointments) {
                if (err) throw err;
                resolve(appointments)
            });
        })
        return promise;
    } catch (error) {
        console.error("Unable to retrieve appointments", error)
        throw error;
    }
}
const createLoanClosingAppointment = async (newAppointment) => {
    try {
        const secret = await secretsManager.getSecret(secretsManager.secretNames.accuity)
        const acuity = Acuity.basic({
            userId: secret.userId,
            apiKey: secret.apiKey
          });

        var options = {
        method: 'POST',
        body: {
            appointmentTypeID : appointmentTypeIds.LOAN_CLOSING,
            datetime          : newAppointment.datetime || '2016-04-01T09:00',
            firstName         : newAppointment.firstName || 'Bob',
            lastName          : newAppointment.lastName || 'McTest',
            email             : newAppointment.email || 'bob.mctest@example.com',
            notes             : newAppointment.notes || ""
        }
        };

        let promise = await new Promise((resolve, reject) => {
            acuity.request('/appointments?admin=true', options, function (err, res, appointment) {
                if (appointment.status_code === 400) reject(appointment);
                resolve(appointment);
              });
        })
        return promise;
    } catch (error) {
        console.error("Unable to retrieve appointments", error)
        throw error;
    }
}

module.exports = {
    appointmentTypeIds,
    getAppointmentAvailableTimes,
    getAppointments,
    createLoanClosingAppointment,
    getAppointmentAvailableDates,
    getLoanClosingAppointmentDetails
}


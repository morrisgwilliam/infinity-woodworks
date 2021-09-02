const controller = require("../controllers");
const express = require("express")
const router = express.Router();

// appointments // availability
router.get(`/appointments`, controller.getAppointments);
router.post(`/appointments`, controller.createAppointment);
router.get(`/appointments/closing-details`, controller.getClosingAppointmentDetails);
router.get(`/availability/times`, controller.getAppointmentAvailableTimes);
router.get(`/availability/dates`, controller.getAppointmentAvailableDates);

// loan applications
router.get(`/applications`, controller.getApplication);
router.post(`/applications`, controller.createApplication);
router.put(`/applications`, controller.createApplication);
router.post(`/applications/no-times-available`, controller.sendReschedulingEmail);

module.exports = router;
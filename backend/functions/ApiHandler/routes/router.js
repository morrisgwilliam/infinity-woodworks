const controller = require("../controllers");
const express = require("express")
const router = express.Router();

// appointments // availability
router.post(`/quote`, controller.sendQuoteEmail);


module.exports = router;
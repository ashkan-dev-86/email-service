var express = require("express");
const emailController = require("../controllers/email.controller");

var router = express.Router();
router.post("/send", emailController.signup);

module.exports = router;
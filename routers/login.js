const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/login-controller");

router.get("/", LoginController.getLoginForm);
router.post("/", LoginController.postLoginForm);

module.exports = router;

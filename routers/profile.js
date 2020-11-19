const express = require("express");
const router = express.Router();
const ProfileController = require("../controllers/profile-controller");
const autentikasi = require("../middlewares/autentikasi");

router.get("/", autentikasi, ProfileController.getProfile);
module.exports = router;

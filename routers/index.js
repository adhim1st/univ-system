const express = require("express");
const router = express.Router();
const routeHome = require("./home");
const routeStudent = require("./student");
const routeSubject = require("./subject");
const routeLogin = require("./login");
const routeProfile = require("./profile");

router.use("/", routeHome);
router.use("/students", routeStudent);
router.use("/subjects", routeSubject);
router.use("/login", routeLogin);
router.use("/profile", routeProfile);

module.exports = router;

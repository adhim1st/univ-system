const express = require("express");
const router = express.Router();
const SubjectController = require("../controllers/subject-controller");

router.get("/", SubjectController.getSubject);
router.get("/add", SubjectController.getSubjectAdd);
router.post("/add", SubjectController.postSubjectAdd);
router.get("/:id/seestudent", SubjectController.getSubjectSeeStudent);
router.get("/:id/delete", SubjectController.getSubjectDelete);
router.get("/:id/edit", SubjectController.getSubjectEdit);
router.post("/:id/edit", SubjectController.postSubjectEdit);

module.exports = router;

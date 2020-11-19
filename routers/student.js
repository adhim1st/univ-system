const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/student-controller");

router.get("/", StudentController.getStudent);
router.get("/add", StudentController.getStudentAdd);
router.post("/add", StudentController.postStudentAdd);
router.get("/:id/addsubject", StudentController.getStudentAddSubject);
router.post("/:id/addsubject", StudentController.postStudentAddSubject);
router.get("/:id/seesubject", StudentController.getStudentSeeSubject);
router.get("/:id/delete", StudentController.getStudentDelete);
// router.get("/:id/seesubject/:sbid/accept", StudentController.getStudentAccept);

module.exports = router;

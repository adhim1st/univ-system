const { Student, Subject, University } = require("../models");

class StudentController {
  static getStudent(req, res) {
    Student.findAll()
      .then((data) => {
        res.render("students", { data: data });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getStudentAdd(req, res) {
    res.render("students_add");
  }

  static postStudentAdd(req, res) {
    Student.create({
      user_name: req.body.user_name,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      birth_year: req.body.birth_year,
      IPK: req.body.IPK,
    })
      .then((data) => {
        res.redirect("/students");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getStudentAddSubject(req, res) {
    let arrStudent = [];
    Student.findByPk(req.params.id, { include: [Subject] })
      .then((data) => {
        arrStudent = data;
        return Subject.findAll();
      })
      .then((data) => {
        res.render("students_addsubject", {
          studentData: arrStudent,
          subjectData: data,
        });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static postStudentAddSubject(req, res) {
    University.create({
      StudentId: req.body.StudentId,
      SubjectId: req.body.SubjectId,
    })
      .then((data) => {
        res.redirect("/students");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getStudentSeeSubject(req, res) {
    let arrStudent = [];
    Student.findByPk(req.params.id)
      // University.findAll({
      //   include: [{ model: Student, where: { id: req.params.id } }, Subject],
      // })

      .then((data) => {
        arrStudent = data;
        return University.findAll(
          { include: [Subject] },
          { where: { StudentId: req.params.id } }
        );
      })
      .then((data) => {
        res.render("students_seesubject", {
          studentData: arrStudent,
          subjectData: data,
        });
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }

  static getStudentDelete(req, res) {
    Student.destroy({ where: { id: req.params.id } })
      .then((data) => {
        res.redirect("students");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  // static getStudentAccept(req, res) {
  //   University.update(
  //     {
  //       status: "active",
  //     },
  //     {
  //       where: {
  //         SubjectId: req.params.sbid,
  //         StudentId: req.params.id,
  //       },
  //     }
  //   ).then((data) => {
  //     res.redirect("/students");
  //   });
  // }
}

module.exports = StudentController;

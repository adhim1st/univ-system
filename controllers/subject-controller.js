const { Student, Subject } = require("../models");

class SubjectController {
  static getSubject(req, res) {
    Subject.findAll()
      .then((data) => {
        res.render("subjects", { data: data });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getSubjectAdd(req, res) {
    res.render("subjects_add");
  }

  static postSubjectAdd(req, res) {
    Subject.create({
      subject_name: req.body.subject_name,
    })
      .then((data) => {
        res.redirect("/subjects");
      })
      .catch((err) => {
        let errmes = "";
        for (let i = 0; i < err.errors.length; i++) {
          errmes += err.errors[i].message;
          errmes += ", ";
        }
        res.send(errmes);
      });
  }

  static getSubjectSeeStudent(req, res) {
    Subject.findByPk(req.params.id, { include: [Student] })
      .then((data) => {
        res.render("subjects_seestudent", { data: data });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getSubjectDelete(req, res) {
    Subject.destroy({ where: { id: req.params.id } })
      .then((data) => {
        res.redirect("/subjects");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getSubjectEdit(req, res) {
    Subject.findByPk(req.params.id)
      .then((data) => {
        res.render("subjects_edit", { data: data });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static postSubjectEdit(req, res) {
    Subject.update(
      {
        subject_name: req.body.subject_name,
      },
      { where: { id: req.params.id } }
    )
      .then((data) => {
        res.redirect("/subjects");
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = SubjectController;

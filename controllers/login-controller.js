const { Student } = require("../models/");
const { compare } = require("../helpers/bcryptHelper");
class LoginController {
  static getLoginForm(req, res) {
    res.render("login_form");
  }

  static postLoginForm(req, res) {
    Student.findOne({ where: { user_name: req.body.user_name } })
      .then((data) => {
        if (data) {
          if (compare(req.body.password, data.password)) {
            req.session.fullname = data.fullName();
            req.session.birth_year = data.birth_year;
            res.redirect("/profile");
          } else {
            res.redirect("/login");
          }
        } else {
          res.redirect("/profile");
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = LoginController;

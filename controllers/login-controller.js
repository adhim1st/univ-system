class LoginController {
  static getLoginForm(req, res) {
    res.render("login_form");
  }

  static postLoginForm(req, res) {}
}

module.exports = LoginController;

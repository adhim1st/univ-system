const countAge = require("../helpers/countAge");

class ProfileController {
  static getProfile(req, res) {
    let fullname = "";
    let birthyear = 0;
    if (req.session.fullname) {
      fullname = req.session.fullname;
      birthyear = req.session.birth_year;
    }
    res.render("profile", { fullname, birthyear, countAge });
  }
}

module.exports = ProfileController;

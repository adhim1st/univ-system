function autentikasi(req, res, next) {
  if (req.session.fullname) {
    next();
  } else {
    res.send("Silahkan login untuk melanjutkan");
  }
}

module.exports = autentikasi;

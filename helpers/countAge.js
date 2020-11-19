function countAge(byear) {
  return new Date().getFullYear() - byear;
}

module.exports = countAge;

"use strict";
const { Model } = require("sequelize");
const { hash } = require("../helpers/bcryptHelper");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    fullName() {
      return `${this.first_name} ${this.last_name}`;
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsToMany(models.Subject, { through: models.University });
    }
  }
  Student.init(
    {
      user_name: DataTypes.STRING,
      password: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      IPK: DataTypes.INTEGER,
      birth_year: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  Student.addHook("beforeCreate", (instance, options) => {
    let hashed = hash(instance.password);
    instance.password = hashed;
  });

  return Student;
};

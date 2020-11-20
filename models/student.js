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
      user_name: {
        type: DataTypes.STRING,
        validate: {
          isUserEmpty(value) {
            if (value == "") {
              throw new Error("Username required");
            }
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          isPassEmpty(value) {
            if (value == "" || value.length < 8) {
              throw new Error("Password required, minimum 8 character");
            }
          },
        },
      },
      first_name: {
        type: DataTypes.STRING,
        validate: {
          isFNameEmpty(value) {
            if (value == "") {
              throw new Error("First Name required");
            }
          },
        },
      },
      last_name: {
        type: DataTypes.STRING,
        validate: {
          isLNameEmpty(value) {
            if (value == "") {
              throw new Error("Last Name required");
            }
          },
        },
      },
      IPK: DataTypes.INTEGER,
      birth_year: {
        type: DataTypes.INTEGER,
        validate: {
          isUserEmpty(value) {
            if (value == "") {
              throw new Error("Birth Year required");
            }
          },
        },
      },
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

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subject.belongsToMany(models.Student, { through: models.University });
    }
  }
  Subject.init(
    {
      subject_name: {
        type: DataTypes.STRING,
        validate: {
          isSubjectEmpty(value) {
            if (value == "") {
              throw new Error("Subject Name required");
            }
          },
        },
      },
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Subject",
    }
  );
  return Subject;
};

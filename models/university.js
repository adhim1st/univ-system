"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class University extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      University.belongsTo(models.Student);
      University.belongsTo(models.Subject);
    }
  }
  University.init(
    {
      StudentId: DataTypes.INTEGER,
      SubjectId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "University",
    }
  );
  University.addHook("beforeCreate", (instance, options) => {
    instance.status = "pending";
  });
  return University;
};

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint("Universities", {
      fields: ["StudentId"],
      type: "foreign key",
      name: "add-student-fk-constraint",
      references: {
        table: "Students",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint(
      "Universities",
      "add-student-fk-constraint",
      {}
    );
  },
};

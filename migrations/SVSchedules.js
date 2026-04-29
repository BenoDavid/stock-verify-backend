"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SVSchedules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      scheduledDate: { type: Sequelize.DATE },
      auditDate: { type: Sequelize.DATE },
      status: { type: Sequelize.STRING },
      facility: { type: Sequelize.STRING },
      scheduledBy: { type: Sequelize.STRING },
      title: { type: Sequelize.STRING },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("SVSchedules");
  },
};

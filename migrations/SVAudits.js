"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SVAudits", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      auditedBy: { type: Sequelize.STRING },
      auditStockId: { type: Sequelize.INTEGER },
      qty: { type: Sequelize.INTEGER },
      scheduleId: { type: Sequelize.INTEGER },
      location: { type: Sequelize.STRING },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("SVAudits");
  },
};

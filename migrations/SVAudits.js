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
      qty: { type: Sequelize.DOUBLE },
      scheduleId: { type: Sequelize.INTEGER },
      location: { type: Sequelize.STRING },
      auditedOn: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("SVAudits");
  },
};

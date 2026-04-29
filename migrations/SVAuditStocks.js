"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SVAuditStocks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      scheduleId: { type: Sequelize.INTEGER },
      site: { type: Sequelize.STRING },
      buyer: { type: Sequelize.STRING },
      productGroup: { type: Sequelize.STRING },
      articleCode: { type: Sequelize.STRING },
      articleName: { type: Sequelize.STRING },
      colorName: { type: Sequelize.STRING },
      sizeName: { type: Sequelize.STRING },
      quantity: { type: Sequelize.INTEGER },
      physicalQty: { type: Sequelize.INTEGER },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("SVAuditStocks");
  },
};

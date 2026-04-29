"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SVAudit extends Model {
    static associate(models) {
      // SVAudit belongs to SVAuditStock (one-to-one)
      // this.belongsTo(models.SVAuditStock, {
      //   foreignKey: "auditStockId",
      //   as: "auditStock",
      // });
      SVAudit.belongsTo(models.SVAuditStock, {
        foreignKey: "auditStockId",
        as: "auditStock",
      });
    }
  }
  SVAudit.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      auditedBy: { type: DataTypes.STRING },
      auditStockId: { type: DataTypes.INTEGER },
      qty: { type: DataTypes.INTEGER },
      scheduleId: { type: DataTypes.INTEGER },
      location: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "SVAudit",
      timestamps: false,
    },
  );
  return SVAudit;
};

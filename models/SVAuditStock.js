"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SVAuditStock extends Model {
    static associate(models) {
      this.hasMany(models.SVAudit, {
        foreignKey: "auditStockId",
        as: "audits",
      });
    }
  }
  SVAuditStock.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      scheduleId: { type: DataTypes.INTEGER },
      site: { type: DataTypes.STRING },
      buyer: { type: DataTypes.STRING },
      productGroup: { type: DataTypes.STRING },
      articleCode: { type: DataTypes.STRING },
      articleName: { type: DataTypes.STRING },
      colorName: { type: DataTypes.STRING },
      sizeName: { type: DataTypes.STRING },
      quantity: { type: DataTypes.INTEGER },
      physicalQty: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "SVAuditStock",
      timestamps: false,
    },
  );
  return SVAuditStock;
};

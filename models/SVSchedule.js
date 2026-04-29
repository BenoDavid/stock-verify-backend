"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SVSchedule extends Model {
    static associate(models) {
      // SVSchedule has many SVAuditStock
      this.hasMany(models.SVAuditStock, {
        foreignKey: "scheduleId",
        as: "auditStocks",
      });
      // SVSchedule has many SVAudit (optional, if audits are directly linked to schedule)
      this.hasMany(models.SVAudit, { foreignKey: "scheduleId", as: "audits" });
    }
  }
  SVSchedule.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      scheduledDate: { type: DataTypes.DATE },
      auditDate: { type: DataTypes.DATE },
      status: { type: DataTypes.STRING },
      facility: { type: DataTypes.STRING },
      scheduledBy: { type: DataTypes.STRING },
      title: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "SVSchedule",
      tableName: "SVSchedules",
      timestamps: false, // Assuming no createdAt/updatedAt fields; set to true if you want them
    },
  );
  return SVSchedule;
};

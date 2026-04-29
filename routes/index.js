const express = require("express");
const router = express.Router();

const SVScheduleRouter = require("./SVScheduleRouter");
const SVAuditRouter = require("./SVAuditRouter");
const SVAuditStockRouter = require("./SVAuditStockRouter");

// // Use routes
router.use("/SVSchedule", SVScheduleRouter);
router.use("/SVAudit", SVAuditRouter);
router.use("/SVAuditStock", SVAuditStockRouter);

module.exports = router;

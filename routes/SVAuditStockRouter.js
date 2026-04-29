const SVAuditStockController = require("../controllers/SVAuditStockController");
const BaseRouter = require("./BaseRouter");
const SVAuditStockRouter = new BaseRouter(SVAuditStockController);
module.exports = SVAuditStockRouter.getRouter();

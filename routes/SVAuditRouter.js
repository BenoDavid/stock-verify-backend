const SVAuditController = require("../controllers/SVAuditController");
const BaseRouter = require("./BaseRouter");
const SVAuditRouter = new BaseRouter(SVAuditController);
module.exports = SVAuditRouter.getRouter();

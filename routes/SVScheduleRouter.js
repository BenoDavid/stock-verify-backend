const SVScheduleController = require("../controllers/SVScheduleController");
const BaseRouter = require("./BaseRouter");
const SVScheduleRouter = new BaseRouter(SVScheduleController);
module.exports = SVScheduleRouter.getRouter();

const router = require("express").Router();
const chartController = require("../controllers/chart.controller");

router.get("/clients", chartController.getClients);

router.get("/chart-data", chartController.getChartData);

module.exports = router;
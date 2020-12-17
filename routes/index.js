const router = require("express").Router();

const chartRoutes = require("./chart.route");

router.use("/chart", chartRoutes);

module.exports = router;
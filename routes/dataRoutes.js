const express = require("express");
var router = express.Router();

dataRoute = require("../controllers/dataControllers");

router.get("/", dataRoute.dataController)

module.exports = router;
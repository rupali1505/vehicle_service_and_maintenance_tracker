const express = require("express");
const { postVehicle, getAllVehiclesData } = require("../Controller/vehicle.controller");
const router = express.Router();

router.post("/vehicle",postVehicle);
router.get("/getAllVehicles",getAllVehiclesData)



module.exports = router
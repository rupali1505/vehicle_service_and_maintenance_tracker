const express = require("express");
const server = express();
const mongoose = require("mongoose");
const vehicleRoute = require("./Routes/vehicle.route");
const cors = require("cors")
const PORT = 5000;

server.use(express.json());
server.use(cors());

server.use("/api", vehicleRoute)

mongoose.connect("mongodb://localhost:27017/vehicle").then(()=>{
    console.log("connected to database");
})

server.listen(PORT,()=>{
    console.log('server is listening on Port ',PORT)
})
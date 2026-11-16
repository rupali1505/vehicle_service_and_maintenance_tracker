const mongoose = require("mongoose");

const vehicle = new mongoose.Schema({
    registrationNumber:{
        type:String,
        required:true,
        unique:true
    },
    model:{
        type:String,
        required:true
    },
    manufacturingYear:{
        type: String,
        required: true
    },
    fuelType:{
        type: String,
        required: true
    },
    currentOdometer:{
        type: Number,
        required: true
    },
    nickname:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model("vehicle",vehicle);




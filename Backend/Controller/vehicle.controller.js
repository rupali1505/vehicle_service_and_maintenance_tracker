const vehicleModel = require("../Model/vehicle.model");

const postVehicle = async (req,res)=>{
   const data = req.body;
   console.log(data,'reqbody')
   const vehicleObj = new vehicleModel(data);
   const response = await vehicleObj.save();
   try {
       if (response) {
           res.status(200).json({
               status: "success",
               data: response,
               msg: "vehicle registered successfully"
           })
       }
   } catch (error) {
       res.status(500).json({
           status: 500,
           data: error,
           msg: "vehicle registration failed"
       })
   }
}

const getAllVehiclesData = async(req,res)=>{
    const response = await vehicleModel.find();
    try {
        if(response){
            res.status(200).json({
                status: "success",
                data: response,
                msg: "fetched data successfully"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            data: error,
            msg: "data fetching failed"
        })
    }
}

module.exports = {
    postVehicle,
    getAllVehiclesData
}
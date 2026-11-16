import { useEffect, useState } from "react";
import axios from "axios";

export function VehicleRegister() {
  const [vehicleData, setVehicleData] = useState({
    registrationNumber: "",
    model: "",
    manufacturingYear: "",
    fuelType: "",
    currentOdometer: Number,
    nickname: "",
  });

  const handleInput = (e) => {
    setVehicleData({
      ...vehicleData,
      [e.target.name]: e.target.value,
    });
  };
  const formHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/api/vehicle",
      vehicleData,
    );
    console.log(response);
  };

  return (
    <>
      <form action="vehicleForm" onSubmit={formHandler}>
        <label htmlFor="">Registration Number</label>
        <input
          type="text"
          name="registrationNumber"
          onChange={handleInput}
          value={vehicleData.registrationNumber}
        />
        <br />
        <label htmlFor="">Model</label>
        <input
          type="text"
          name="model"
          onChange={handleInput}
          value={vehicleData.model}
        />
        <br />
        <label htmlFor="">Manufacturing Year</label>
        <input
          type="text"
          name="manufacturingYear"
          onChange={handleInput}
          value={vehicleData.manufacturingYear}
        />
        <br />
        <label htmlFor="">Fuel Type</label>
        <input
          type="text"
          name="fuelType"
          onChange={handleInput}
          value={vehicleData.fuelType}
        />
        <br />
        <label htmlFor="">Current Odometer</label>
        <input
          type="number"
          name="currentOdometer"
          onChange={handleInput}
          value={vehicleData.currentOdometer}
        />
        <br />
        <label htmlFor="">NickName</label>
        <input
          type="text"
          name="nickname"
          onChange={handleInput}
          value={vehicleData.nickname}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export function GetAllVehicle() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/getAllVehicles");
    console.log(res.data, "all data");
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <>
      {data !== null &&
        data.map((vehicle) => {
          return <p> {vehicle.registrationNumber}</p>;
        })}
    </>
  );
}

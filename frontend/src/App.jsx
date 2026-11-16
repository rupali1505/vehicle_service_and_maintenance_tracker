import Navbar from "./Components/Navbar";
import {VehicleRegister,GetAllVehicle} from "./Components/vehicleRegister";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/vehicle" element={<VehicleRegister />} />
          <Route path="/allVehicle" element={<GetAllVehicle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

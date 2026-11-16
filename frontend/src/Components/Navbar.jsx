import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <Link to="/vehicle">Register Vehicle</Link>
      <Link to="/allVehicle">get all registrations</Link>
    </>
  );
}

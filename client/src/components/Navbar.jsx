import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/", {
      replace: true,
    });
  };

  return (
    <nav className="navbar">
      <h2>Nutrient Tracker</h2>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
export default Navbar;
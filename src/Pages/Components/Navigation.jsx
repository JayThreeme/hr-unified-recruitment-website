import { Link, useLocation } from "react-router"; // Ensure you are importing from 'react-router-dom'
import { hrunifiedlogosvg } from "../../assets";

const Navigation = () => {
  const location = useLocation();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light  position-absolute top-0 start-0 container-fluid z-3"
      style={{
        padding: "0px",
      }}
    >
      <div className="container-xl nav-custom-padding ">
        <Link className="navbar-brand" to="/">
          <img src={hrunifiedlogosvg} alt="logo" className="img-fluid" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link
                className="nav-link fw-medium"
                style={{
                  color: location.pathname === "/" ? "#C31D25" : "inherit",
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-medium"
                style={{
                  color: location.pathname === "/about" ? "#C31D25" : "inherit",
                }}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-medium"
                style={{
                  color: location.pathname === "/jobs" ? "#C31D25" : "inherit",
                }}
                to="/jobs"
              >
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-medium"
                style={{
                  color:
                    location.pathname === "/contact" ? "#C31D25" : "inherit",
                }}
                to="/contact"
              >
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <button className="btn button-style1 ms-2 fw-medium">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import { Link, Outlet } from "react-router";
import Footer from "../Components/Footer";
import AdminNavigation from "./Components/AdminNavigation";
import "../../Css/Admin.css";
import { hrunifiedlogosvg,profile1 } from "../../assets";

const Dashboard = () => {
  return (
    <>
      <div className="d-flex vh-100">
        <div className="sidebar bg-light border-end">
          <div className="p-3 border-bottom">
            <div className="d-flex align-items-center">
              <div>
                <Link className="navbar-brand" to="/">
                  <img
                    src={hrunifiedlogosvg}
                    alt="logo"
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
          </div>

          <AdminNavigation />
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 d-flex flex-column">
          {/* Top Bar */}
          <div className="topbar px-4 py-3 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              {/* <ArrowLeft size={20} className="me-2" /> */}
              <span>Welcome Admin, Today is January 29, 2025</span>
            </div>
            <div>
              <img
                src={profile1}
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>

          {/* Page Content */}
          <div className="flex-grow-1 p-4" style={{ backgroundColor: "#F0F0F0"}}>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;

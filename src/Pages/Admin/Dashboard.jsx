import { useState } from "react";
import { Link, Outlet } from "react-router";
import Footer from "../Components/Footer";
import AdminNavigation from "./Components/AdminNavigation";
import "../../Css/Admin.css";
import { hrunifiedlogosvg, profile1 } from "../../assets";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <div className="d-flex flex-column vh-100">
        <div className="d-flex flex-grow-1">
          {/* Sidebar */}
          <div
            className={`sidebar bg-light border-end ${
              sidebarOpen ? "d-block" : "d-none d-md-block"
            }`}
            style={{ transition: "all 0.3s ease", flexShrink: 0 }}
          >
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
          <div className="d-flex flex-column flex-grow-1">
            {/* Top Bar */}
            <div className="topbar px-4 py-3 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                {/* Hamburger Button (visible on mobile) */}
                <button
                  className="d-md-none btn btn-light me-2"
                  onClick={toggleSidebar}
                  aria-label="Toggle sidebar"
                >
                  <i className="bi bi-list"></i>
                </button>
                <span>Welcome Admin, Today is January 29, 2025</span>
              </div>
              <div>
                <img src={profile1} alt="Profile" className="profile-image" />
              </div>
            </div>

            {/* Page Content */}
            <div
              className="flex-grow-1 p-4"
              style={{ backgroundColor: "#F0F0F0", minHeight: "0" }}
            >
              {/* Make sure the content inside Outlet stretches */}
              <Outlet />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;

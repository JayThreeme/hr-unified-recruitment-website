import { Link, useLocation } from "react-router";
import { useState } from "react";

const AdminNavigation = () => {
  const location = useLocation();
  const [isJobsOpen, setIsJobsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <nav className="p-3">
      <div className="d-flex align-items-center justify-content-center gap-2 ">
        <span className="fw-bold fs-5">Admin Panel</span>
      </div>

      {/* Navigation List */}
      <ul className="nav flex-column nav-pills ps-2">
        <li>
          <hr />
        </li>
        <li className="nav-item mb-3">
          <Link
            className="fw-medium text-decoration-none d-flex align-items-center gap-2 "
            to="/admin/dashboard"
            style={{
              color:
                location.pathname === "/admin/dashboard"
                  ? "#C31D25"
                  : "inherit",
            }}
          >
            <i className="bi bi-speedometer2"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link
            className="fw-medium text-decoration-none d-flex align-items-center gap-2 "
            to="/admin/applicants"
            style={{
              color:
                location.pathname === "/admin/applicants"
                  ? "#C31D25"
                  : "inherit",
            }}
          >
            <i className="bi bi-people"></i> Applicants
          </Link>
        </li>

        {/* Jobs Dropdown */}
        <li className="nav-item mb-3">
          <button
            className="fw-medium text-decoration-none bg-transparent border-0 w-100 text-start d-flex align-items-center gap-2 px-0"
            onClick={() => setIsJobsOpen(!isJobsOpen)}
            style={{
              color: location.pathname.includes("/admin/jobs")
                ? "#C31D25"
                : "inherit",
            }}
          >
            <i className="bi bi-briefcase"></i> Jobs ▾
          </button>
          <ul
            className="nav flex-column ps-4"
            style={{
              maxHeight: isJobsOpen ? "150px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease-in-out",
            }}
          >
            <li className="mb-1">
              <Link
                className="text-decoration-none d-flex align-items-center gap-2"
                to="/admin/jobs"
                style={{ color: "inherit" }}
              >
                <i className="bi bi-eye"></i> View Jobs
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="text-decoration-none d-flex align-items-center gap-2"
                to="/admin/jobs/create"
                style={{ color: "inherit" }}
              >
                <i className="bi bi-plus-square"></i> Create Job
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="text-decoration-none d-flex align-items-center gap-2"
                to="/admin/jobs/delete"
                style={{ color: "inherit" }}
              >
                <i className="bi bi-trash"></i> Delete Jobs
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item mb-3">
          <Link
            className="fw-medium text-decoration-none d-flex align-items-center gap-2"
            to="/admin/calendar"
            style={{
              color:
                location.pathname === "/admin/calendar" ? "#C31D25" : "inherit",
            }}
          >
            <i className="bi bi-calendar"></i> Calendar
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link
            className="fw-medium text-decoration-none d-flex align-items-center gap-2"
            to="/admin/reportanalytics"
            style={{
              color:
                location.pathname === "/admin/reportanalytics"
                  ? "#C31D25"
                  : "inherit",
            }}
          >
            <i className="bi bi-book"></i> Report & Analytics
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link
            className="fw-medium text-decoration-none d-flex align-items-center gap-2"
            to="/admin/StudioAccount"
            style={{
              color:
                location.pathname === "/admin/StudioAccount"
                  ? "#C31D25"
                  : "inherit",
            }}
          >
            <i className="bi bi-building"></i> Studio Account
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link
            className="fw-medium text-decoration-none d-flex align-items-center gap-2"
            to="/admin/reviewfeedback"
            style={{
              color:
                location.pathname === "/admin/reviewfeedback"
                  ? "#C31D25"
                  : "inherit",
            }}
          >
            <i className="bi bi-file-earmark-diff"></i> Review & Feedback
          </Link>
        </li>
        <li>
          <hr />
        </li>
        {/* account */}
        <li className="nav-item mt-2 mb-3">
          <button
            className="fw-medium text-decoration-none bg-transparent border-0 w-100 text-start d-flex align-items-center gap-2 px-0"
            onClick={() => setIsAccountOpen(!isAccountOpen)}
            style={{
              color: location.pathname.includes("/admin/account")
                ? "#C31D25"
                : "inherit",
            }}
          >
            <i className="bi bi-person-circle"></i> Account ▾
          </button>
          <ul
            className="nav flex-column ps-4"
            style={{
              maxHeight: isAccountOpen ? "120px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease-in-out",
            }}
          >
            <li className="mb-1">
              <Link
                className="text-decoration-none d-flex align-items-center gap-2"
                to="/admin/account/edit"
                style={{ color: "inherit" }}
              >
                <i className="bi bi-pencil"></i> Edit Profile
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="text-decoration-none d-flex align-items-center gap-2"
                to="/admin/account/password"
                style={{ color: "inherit" }}
              >
                <i className="bi bi-key"></i> Change Password
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item mb-3">
          <Link
            className="fw-medium text-decoration-none d-flex align-items-center gap-2"
            to="/admin/settings"
            style={{
              color:
                location.pathname === "/admin/settings" ? "#C31D25" : "inherit",
            }}
          >
            <i className="bi bi-gear-fill"></i> Setting
          </Link>
        </li>
        <li>
          <hr />
        </li>
        <li className="mb-3">
          <Link
            className="text-decoration-none d-flex align-items-center gap-2 text-danger"
            to="/"
            style={{ color: "#C31D25" }}
          >
            <i className="bi bi-box-arrow-right"></i> Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavigation;

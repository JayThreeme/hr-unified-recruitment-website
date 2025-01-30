import { Link } from "react-router";

const AdminNavigation = () => {
  return (
    <nav className="p-3">
      <ul className="nav flex-column nav-pills gap-2 " >
        <li className="nav-item">
          <Link
            className="fw-medium text-decoration-none" 
            to="/admin/dashboard"
            style={{
              color: location.pathname === "/about" ? "#C31D25" : "inherit",
            }}
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
        <Link
            className="fw-medium text-decoration-none"
            to="/admin/applicants"
            style={{
              color: location.pathname === "/about" ? "#C31D25" : "inherit",
            }}
          >
            Applicants
          </Link>
        </li>
        <li className="nav-item">
        <Link
            className="fw-medium text-decoration-none"
            to="/admin/jobs"
            style={{
              color: location.pathname === "/about" ? "#C31D25" : "inherit",
            }}
          >
            Jobs
          </Link>
        </li>
        <li className="nav-item">
        <Link
            className="fw-medium text-decoration-none"
            to="/admin/calendar"
            style={{
              color: location.pathname === "/about" ? "#C31D25" : "inherit",
            }}
          >
            Calendar
          </Link>
        </li>
        <li className="nav-item">
        <Link
            className="fw-medium text-decoration-none"
            to="/admin/StudioAccount"
            style={{
              color: location.pathname === "/about" ? "#C31D25" : "inherit",
            }}
          >
            Studio Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavigation;

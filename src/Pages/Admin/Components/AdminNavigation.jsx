import { Link, useLocation } from "react-router";

const AdminNavigation = () => {
  const location = useLocation();
  return (
    <nav className="p-3">
      <ul className="nav flex-column nav-pills gap-2 ">
        <li className="nav-item">
          <Link
            className="fw-medium text-decoration-none"
            to="/admin/dashboard"
            style={{
              color:
                location.pathname === "/admin/dashboard"
                  ? "#C31D25"
                  : "inherit",
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
              color:
                location.pathname === "/admin/applicants"
                  ? "#C31D25"
                  : "inherit",
            }}
          >
            Applicants
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link fw-medium text-decoration-none dropdown-toggle"
            to="/admin/jobs"
            style={{
              color:
                location.pathname === "/admin/jobs" ? "#C31D25" : "inherit",
            }}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            Jobs
          </Link>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                View Jobs
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Create Job
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Delete Jobs
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link
            className="fw-medium text-decoration-none"
            to="/admin/calendar"
            style={{
              color:
                location.pathname === "/admin/calendar" ? "#C31D25" : "inherit",
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
              color:
                location.pathname === "/admin/StudioAccount"
                  ? "#C31D25"
                  : "inherit",
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

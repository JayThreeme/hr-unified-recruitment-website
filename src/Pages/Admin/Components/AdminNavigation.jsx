const AdminNavigation = () => {
  return (
    <nav className="p-3">
      <ul className="nav flex-column nav-pills gap-2">
        <li className="nav-item">
          <a href="#" className="nav-link active d-flex align-items-center">
            {/* <LayoutDashboard className="me-2" size={20} /> */}
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link text-secondary d-flex align-items-center"
          >
            {/* <Users className="me-2" size={20} /> */}
            Applicants
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link text-secondary d-flex align-items-center"
          >
            {/* <Briefcase className="me-2" size={20} /> */}
            Jobs
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link text-secondary d-flex align-items-center"
          >
            {/* <Calendar className="me-2" size={20} /> */}
            Calendar
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link text-secondary d-flex align-items-center"
          >
            {/* <UserCircle className="me-2" size={20} /> */}
            Studio Account
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavigation;

const AdminDashboard = () => {
  const status = [
    {
      value: "35",
      title: "New Candidates",
      color: "#E2F9D1",
    },
    {
      value: "15",
      title: "New Applicants",
      color: "#F9F6D1",
    },
    {
      value: "11",
      title: "Rejected",
      color: "#FDE0D7",
    },
    {
      value: "15",
      title: "In Process",
      color: "#FBE4CA",
    },
    {
      value: "113",
      title: "Total Candidates",
      color: "#D1D7F9",
    },
  ];
  return (
    <>
      <div className="" >
        <div className="d-flex gap-3 justify-content-start ">
          <h5>Dashboard</h5>
          <ul className="nav ">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Fulltime
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Remote
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Part-time
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Intern
              </a>
            </li>
          </ul>
        </div>

        {/* status bars */}
        <div className="card p-4">
          <div className="row d-flex gap-3">
            {status.map((status, idx) => (
              <div key={idx} className="col mx-0 px-0">
                <div className="card" style={{ backgroundColor: status.color, width: "160px" }}>
                  <div className="card-body text-center fw-semibold p-0 m-0">
                    <h1>{status.value}</h1>
                  </div>
                  <div className="card-footer text-body-secondary p-0 m-0 text-center">
                    <p>{status.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* charts */}
        <div className="card">
          {/* left */}
          <div>asd</div>
          {/* right */}
          <div>asd</div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

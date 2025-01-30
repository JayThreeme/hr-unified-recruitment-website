const AdminApplicants = () => {
  const applicants = [
    {
      name: "John Doe",
      status: "Applied",
      course: "BSIT",
      progress: "100",
      source: "LinkedIn",
    },
    {
      name: "Jane Smith",
      status: "Interview Scheduled",
      course: "BSCpE",
      progress: "80",
      source: "Indeed",
    },
    {
      name: "Michael Johnson",
      status: "Screening",
      course: "BSCS",
      progress: "60",
      source: "JobStreet",
    },
    {
      name: "Emily Davis",
      status: "Applied",
      course: "BSIS",
      progress: "100",
      source: "Company Website",
    },
    {
      name: "David Martinez",
      status: "Hired",
      course: "BSIT",
      progress: "100",
      source: "Referral",
    },
    {
      name: "Sarah Brown",
      status: "Rejected",
      course: "BSCS",
      progress: "30",
      source: "LinkedIn",
    },
    {
      name: "Robert Wilson",
      status: "Offer Extended",
      course: "BSCpE",
      progress: "95",
      source: "Indeed",
    },
    {
      name: "Jessica Taylor",
      status: "Interview Scheduled",
      course: "BSIT",
      progress: "80",
      source: "Facebook Jobs",
    },
    {
      name: "William Anderson",
      status: "Screening",
      course: "BSIS",
      progress: "55",
      source: "JobStreet",
    },
    {
      name: "Olivia Thomas",
      status: "Applied",
      course: "BSCS",
      progress: "100",
      source: "Glassdoor",
    },
    {
      name: "James White",
      status: "Hired",
      course: "BSIT",
      progress: "100",
      source: "Referral",
    },
    {
      name: "John Doe",
      status: "Applied",
      course: "BSIT",
      progress: "100",
      source: "LinkedIn",
    },
    {
      name: "Jane Smith",
      status: "Interview Scheduled",
      course: "BSCpE",
      progress: "80",
      source: "Indeed",
    },
    {
      name: "Michael Johnson",
      status: "Screening",
      course: "BSCS",
      progress: "60",
      source: "JobStreet",
    },
    {
      name: "Jane Smith",
      status: "Interview Scheduled",
      course: "BSCpE",
      progress: "80",
      source: "Indeed",
    },
    {
      name: "Michael Johnson",
      status: "Screening",
      course: "BSCS",
      progress: "60",
      source: "JobStreet",
    },
    {
      name: "Jane Smith",
      status: "Interview Scheduled",
      course: "BSCpE",
      progress: "80",
      source: "Indeed",
    },
    {
      name: "Michael Johnson",
      status: "Screening",
      course: "BSCS",
      progress: "60",
      source: "JobStreet",
    },
    {
      name: "Emily Davis",
      status: "Applied",
      course: "BSIS",
      progress: "100",
      source: "Company Website",
    },
    {
      name: "David Martinez",
      status: "Hired",
      course: "BSIT",
      progress: "100",
      source: "Referral",
    },
  ];

  return (
    <>
      <div className="">
        <div className="d-flex gap-3 justify-content-start align-items-center">
          <h5 className="m-0">Dashboard</h5>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
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

        {/* charts */}
        <div className="card p-4 m-0">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Course</th>
                <th scope="col">Progress</th>
                <th scope="col">Source</th>
              </tr>
            </thead>
            <tbody>
              {/* name: "James White",
      status: "Hired",
      course: "BSIT",
      progress: "100",
      source: "Referral", */}
              {applicants.map((applicant, idx) => (
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{applicant.name}</td>
                  <td>{applicant.status}</td>
                  <td>{applicant.course}</td>
                  <td>{applicant.progress}</td>
                  <td>{applicant.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminApplicants;

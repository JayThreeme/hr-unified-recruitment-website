import { applicants } from "../../Information/Applicants";

const AdminApplicants = () => {
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
                New
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Interview
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Screening
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hired
              </a>
            </li>
          </ul>
        </div>

        {/* table */}
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
                <th scope="col">Tools</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant, idx) => (
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{applicant.name}</td>
                  <td>{applicant.status}</td>
                  <td>{applicant.course}</td>
                  <td>{applicant.progress}</td>
                  <td>{applicant.source}</td>
                  <td>
                      <div>
                        <a href="">View</a>
                      </div>

                  </td>
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

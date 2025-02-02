import { useState } from "react";
import { applicants } from "../../Information/Applicants";

const AdminApplicants = () => {
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Function to filter applicants based on selected status
  const filteredApplicants = applicants.filter((applicant) => {
    if (selectedFilter === "All") {
      return true; // Show all applicants
    }
    return applicant.status === selectedFilter;
  });

  const handleViewClick = (applicant) => {
    setSelectedApplicant(applicant);
  };

  const handleCloseModal = () => {
    setSelectedApplicant(null);
  };

  const handleFilterClick = (status) => {
    setSelectedFilter(status);
  };

  return (
    <>
      <div className="">
        {/* filter */}
        <div className="d-flex gap-5 justify-content-start align-items-center mb-3">
          <h5 className="m-0">Applicants</h5>
          <ul className="nav">
            {[
              "All",
              "Applied",
              "Interview Scheduled",
              "Screening",
              "Hired",
              "Rejected",
            ].map((status) => (
              <li className="nav-item" key={status}>
                <a
                  className={`nav-link ${
                    selectedFilter === status ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => handleFilterClick(status)}
                >
                  {status}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* table */}
        <div className="card p-4 m-0">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Course</th>
                <th scope="col">Source</th>
                <th scope="col">Tools</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplicants.map((applicant, idx) => (
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{applicant.name}</td>
                  <td>{applicant.status}</td>
                  <td>{applicant.course}</td>
                  <td>{applicant.source}</td>
                  <td>
                    <button
                      className="btn btn-link"
                      onClick={() => handleViewClick(applicant)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal when clicked view */}
      {selectedApplicant && (
        <>
          <div className="modal-backdrop fade show" />

          <div
            className="modal fade show"
            style={{ display: "block", color: "#343A40" }}
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                    Applicant
                  </h1>
                </div>
                <div className="modal-body">
                  <h4>Information</h4>
                  <br />

                  <p style={{ color: "#343A40" }}>
                    <strong>Name:</strong> {selectedApplicant.name}
                  </p>
                  <p style={{ color: "#343A40", fontStyle: "italic" }}>
                    <strong>Date Applied:</strong>{" "}
                    {new Date().toLocaleDateString()}
                  </p>
                  <p style={{ color: "#343A40" }}>
                    <strong>Status:</strong> {selectedApplicant.status}
                  </p>
                  <p style={{ color: "#343A40" }}>
                    <strong>Course:</strong> {selectedApplicant.course}
                  </p>
                  <p style={{ color: "#343A40" }}>
                    <strong>Progress:</strong> {selectedApplicant.progress}
                  </p>
                  <p style={{ color: "#343A40" }}>
                    <strong>Source:</strong> {selectedApplicant.source}
                  </p>
                  <br />
                  <button className=" mb-3">Download Resume</button>
                  <br />
                  <button className=" mb-3">View Test Application</button>
                </div>
                <div className="modal-footer">
                  {/* Modal Actions */}
                  <button type="button" className="btn btn-warning">
                    Set Interview
                  </button>
                  <button type="button" className="btn btn-danger">
                    Reject
                  </button>
                  <button type="button" className="btn btn-info">
                    Pending
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdminApplicants;

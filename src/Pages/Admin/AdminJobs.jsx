import { useState } from "react";
import { jobs } from "../../Information/JobsInfo";

const AdminJobs = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null); // state to track selected job for modal
  const jobsPerPage = 10;

  const filteredJobs =
    filter === "All"
      ? jobs
      : jobs.filter((job) => job.type.toLowerCase() === filter.toLowerCase());

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleOpenModal = (job) => {
    setSelectedJob(job); // set the selected job to show in modal
  };

  const handleCloseModal = () => {
    setSelectedJob(null); // clear the selected job and close the modal
  };

  return (
    <>
      <div className="">
        <div className="d-flex gap-3 justify-content-start align-items-center mb-3">
          <h5 className="m-0">View Jobs</h5>
          {/* filters */}
          <ul className="nav">
            {[
              "All",
              "Full-time",
              "Remote",
              "Part-time",
              "Intern",
              "Contract",
            ].map((type) => (
              <li className="nav-item" key={type}>
                <a
                  className={`nav-link ${filter === type ? "active" : ""}`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setFilter(type);
                    setCurrentPage(1);
                  }}
                >
                  {type}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Job List Table */}
        <div className="card p-4 m-0">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Location</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                <th scope="col">Tools</th>
              </tr>
            </thead>
            <tbody>
              {currentJobs.map((job, idx) => (
                <tr key={idx}>
                  <th scope="row">{indexOfFirstJob + idx + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.location}</td>
                  <td>{job.type}</td>
                  <td>
                    <span className="col-2 text-truncate">
                      {job.description}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-link"
                      onClick={() => handleOpenModal(job)} // open modal with selected job
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-primary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-primary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedJob && (
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
                    {selectedJob.title}
                  </h1>
                </div>
                <div className="modal-body">
                  <p style={{ color: "#343A40" }}>
                    <strong>Name:</strong> {selectedJob.title}
                  </p>
                  <p style={{ color: "#343A40" }}>
                    <strong>Date Applied:</strong>{" "}
                    {new Date().toLocaleDateString()}
                  </p>
                  <p style={{ color: "#343A40" }}>
                    <strong>Location:</strong> {selectedJob.location}
                  </p>
                  <p style={{ color: "#343A40" }}>
                    <strong>Type:</strong> {selectedJob.type}
                  </p>
                  <p style={{ color: "#343A40" }}>
                    <strong>Description:</strong> {selectedJob.description}
                  </p>
                </div>
                <div className="modal-footer">
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

export default AdminJobs;

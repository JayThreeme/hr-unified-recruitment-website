import { useState } from "react";
import { useNavigate } from "react-router";
import { jobs } from "../../../Information/JobsInfo";
import PrivacyDisclosureNotice from "./PrivacyDisclosureNotice";
import LoremIpsum from "./LoremIpsum";

const JobSearchResult = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  const navigate = useNavigate();

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(jobs.length / jobsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleProceed = () => {
    setTimeout(() => {
      navigate("/application/form1");
      window.scrollTo(0, 0);
    }, 500);
  };

  return (
    <div style={{ padding: "10px 0px 0px 10px", backgroundColor: "#FFF" }}>
      <div className="container d-grid gap-4 border-top ">
        <div className="row">
          {/* list */}
          <div className="col-md-4 border-end pt-3 ps-0 pb-5">
            <div className="d-flex flex-column justify-content-between align-items-start mb-3">
              <h5>1 to 40 for Software Engineer</h5>

              <div className="btn-group mt-auto">
                <button className="btn btn-outline-secondary btn-sm">
                  Date
                </button>
                <button className="btn btn-outline-secondary btn-sm">
                  Relevance
                </button>
              </div>
            </div>

            <div>
              {currentJobs.map((job) => (
                <div
                  key={job.id}
                  className={`card mb-3 cursor-pointer ${
                    selectedJob?.id === job.id ? "border-primary" : ""
                  }`}
                  onClick={() => setSelectedJob(job)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <div className="d-flex gap-2 mb-2">
                      <span className="badge bg-secondary">{job.workMode}</span>
                      <span className="badge bg-secondary">{job.type}</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-geo-alt me-2"></i>
                      <span className="text-muted">{job.location}</span>
                    </div>
                    <p className="card-text text-muted">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="d-flex justify-content-between mt-4">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(jobs.length / jobsPerPage)}
              >
                Next
              </button>
            </div>
          </div>

          {/* job details */}
          <div className="col-md-8">
            {selectedJob ? (
              <div className="p-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h3>{selectedJob.title}</h3>
                    <div className="d-flex gap-2 mb-3">
                      <span className="badge bg-secondary">
                        {selectedJob.workMode}
                      </span>
                      <span className="badge bg-secondary">
                        {selectedJob.type}
                      </span>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <i className="bi bi-geo-alt me-2"></i>
                      <span className="text-muted">{selectedJob.location}</span>
                    </div>
                  </div>
                  <button
                    className="btn btn-danger button-style1"
                    data-bs-toggle="modal"
                    data-bs-target="#termsModal"
                  >
                    Apply
                  </button>
                </div>

                <div className="mt-4">
                  <h4>About the Role</h4>
                  <p>{selectedJob.about}</p>
                  <LoremIpsum />
                </div>
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center h-100 text-muted">
                <p>Select a job to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* modal */}
      <div
        className="modal fade"
        id="termsModal"
        tabIndex="-1"
        aria-labelledby="termsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
              <PrivacyDisclosureNotice />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agreeTerms"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="agreeTerms">
                  I agree with the terms described above
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                type="button"
                className="btn button-style1"
                disabled={!isChecked}
                data-bs-dismiss="modal"
                onClick={handleProceed}
              >
                Accept and Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchResult;

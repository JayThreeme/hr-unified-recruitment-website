import { useState } from "react";
import { jobs } from "../../../Information/JobsInfo";

const JobSearchResult = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div
      className=""
      style={{
        padding: "64px 0px",
        backgroundColor: "#FFF",
      }}
    >
      <div className="container d-grid gap-4">
        <div className="row">
          {/* list */}
          <div className="col-md-4 border-end">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>1 to 40 for Software Engineer</h5>
              <div className="btn-group">
                <button className="btn btn-outline-secondary btn-sm">
                  Date
                </button>
                <button className="btn btn-outline-secondary btn-sm">
                  Relevance
                </button>
              </div>
            </div>

            <div className="">
              {jobs.map((job) => (
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
                  <button className="btn btn-danger">Apply</button>
                </div>

                <div className="mt-4">
                  <h4>About the Role</h4>
                  <p>{selectedJob.about}</p>
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
    </div>
  );
};

export default JobSearchResult;

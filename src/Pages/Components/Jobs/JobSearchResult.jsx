import { useState } from "react";
import { useNavigate } from "react-router";
import { jobs } from "../../../Information/JobsInfo";
// import { Modal } from "bootstrap";

const JobSearchResult = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

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
          <div className="col-md-4 border-end pt-3 ps-0">
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

            <div>
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
              <h3>Privacy Notice</h3>
              <p>
                We value your privacy and are committed to protecting your
                personal data. This Privacy Notice outlines how we collect, use,
                store, and protect your personal information when you apply for
                a job through our platform. By submitting your application, you
                consent to the collection and processing of your personal data
                in accordance with this notice.
              </p>
              <p>
                We collect personal data such as your name, contact information,
                resume, and other relevant details necessary to assess your
                qualifications. This information is used exclusively for
                recruitment purposes, including evaluating your application,
                conducting interviews, and communicating with you regarding job
                opportunities. In some cases, we may share your information with
                third-party service providers who assist us in the hiring
                process, but only when necessary and in compliance with data
                protection laws.
              </p>
              <p>
                We implement appropriate security measures to safeguard your
                personal data against unauthorized access, disclosure,
                alteration, or destruction. Your information will be retained
                only for as long as necessary to fulfill the recruitment process
                and comply with legal obligations. If your application is
                unsuccessful, we may keep your details on file for future
                opportunities unless you request deletion of your data.
              </p>
              <p>
                You have the right to access, update, or request the deletion of
                your personal information. If you wish to exercise your rights
                or have any concerns about how your data is handled, please
                contact our support team. By proceeding, you confirm that you
                have read and understood this Privacy Notice and agree to the
                collection and processing of your data as described.
              </p>

              <h3>Non-Disclosure Agreement</h3>
              <p>
                As part of the job application process, you may receive access
                to confidential and proprietary information about our company,
                clients, projects, or internal processes. By applying for this
                position, you acknowledge that any confidential information
                disclosed to you, whether verbally, in writing, or
                electronically, must be handled with the highest level of
                discretion.
              </p>
              <p>
                You agree not to use, disclose, copy, or distribute any
                confidential information for any purpose other than for the
                intended evaluation and interview process. Unauthorized sharing
                of such information with external parties, including but not
                limited to other companies, social media platforms, or
                competitors, is strictly prohibited.
              </p>
              <p>
                If you are selected for employment, your confidentiality
                obligations will continue as per the terms of your employment
                contract. If you are not hired, you must ensure that any
                confidential materials received during the hiring process are
                not retained, shared, or misused in any way.
              </p>
              <p>
                Any violation of this Non-Disclosure Agreement may result in
                legal consequences, including financial penalties or further
                action as deemed necessary by our organization. By proceeding
                with this application, you acknowledge that you have read,
                understood, and agree to comply with the confidentiality terms
                stated above.
              </p>

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

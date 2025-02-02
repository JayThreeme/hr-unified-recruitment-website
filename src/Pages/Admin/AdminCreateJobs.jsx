import { useState } from "react";
import { useNavigate } from "react-router";

const AdminCreateJobs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigate("/admin/jobs");
  };

  return (
    <>
      <div>
        <div className="d-flex gap-3 justify-content-start align-items-center mb-3 py-2">
          <h5 className="m-0">Create Jobs</h5>
        </div>

        {/* form */}
        <div className="card p-4 m-0">
          <div>
            <h3>Job Creation</h3>
            <p>Please provide all the required information</p>
            <hr />
            <div className="row">
              {/* First Column */}
              <div className="col-md-6">
                <div className="d-grid gap-3">
                  <h6 className="fw-semibold mt-3 mb-0">Title</h6>
                  <div className="d-flex column-gap-0 input-group">
                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      placeholder="Enter title"
                    />
                  </div>

                  <h6 className="fw-semibold mt-3 mb-0">Salary</h6>
                  <div className="d-flex column-gap-0 input-group">
                    <input
                      className="form-control"
                      type="text"
                      name="salary"
                      placeholder="Enter Salary"
                    />
                  </div>

                  <h6 className="fw-semibold mt-3 mb-0">Description</h6>
                  <div className="d-flex column-gap-0 input-group">
                    <textarea
                      className="form-control"
                      placeholder="Put Description Here"
                      style={{ height: "100px" }}
                    ></textarea>
                  </div>

                  <h6 className="fw-semibold mt-3 mb-0">Requirements</h6>
                  <div className="d-flex column-gap-0 input-group">
                    <textarea
                      className="form-control"
                      placeholder="Put Requirements Here"
                      style={{ height: "100px" }}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Second Column */}
              <div className="col-md-6">
                <div className="d-grid gap-3">
                  <h6 className="fw-semibold mt-3 mb-0">Department</h6>
                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Department
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Information Technology
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Customer Service
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Finance & Marketing
                        </a>
                      </li>
                    </ul>
                  </div>

                  <h6 className="fw-semibold mt-3 mb-0">Job Type</h6>
                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Job Type
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Full-time
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Remote
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Part-time
                        </a>
                      </li>
                    </ul>
                  </div>

                  <h6 className="fw-semibold mt-3 mb-0">Language</h6>
                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Language
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Filipino
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Tag-lish
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-grid gap-3 mt-4 text-center justify-content-start">
              <button
                type="submit"
                className="btn button-style1 w-auto"
                onClick={handleSubmit}
              >
                Submit Job
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Notification */}
      {modalVisible && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
          aria-labelledby="modalLabel"
          aria-hidden="false"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">
                  Job Created
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Your job listing has been created successfully!</p>
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
      )}
    </>
  );
};

export default AdminCreateJobs;

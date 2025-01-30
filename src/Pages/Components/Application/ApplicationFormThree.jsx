import { Link } from "react-router";

const ApplicationFormThree = () => {
  return (
    <div className="container my-5">
      <div className="d-grid gap-3">
        <div className="position-relative mx-5">
          <div
            className="progress"
            role="progressbar"
            aria-label="Progress"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "2px" }}
          >
            <div className="progress-bar" style={{ width: "75%" }}></div>
          </div>

          <button
            type="button"
            className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
            style={{ width: "2rem", height: "2rem" }}
          >
            1
          </button>

          <button
            type="button"
            className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
            style={{ width: "2rem", height: "2rem" }}
          >
            2
          </button>
          <button
            type="button"
            className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
            style={{ width: "2rem", height: "2rem" }}
          >
            3
          </button>
        </div>
        <div className="d-flex justify-content-between w-100 mt-4">
          <p>Basic Info</p>
          <p className="ms-5">Assessment Test</p>
          <p>Application Form</p>
        </div>

        <div className="card p-5">
          <h3>Application Form</h3>
          <p>Please provide all the required information</p>
          <hr />

          {/* Form Content */}
          <div className="d-grid gap-4">
            <div className="mb-4">
              <h5>Personal Details</h5>
              <div className="d-flex gap-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Surname"
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Prefix"
                />
              </div>
            </div>

            <div className="d-flex gap-3">
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gender
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Male
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Female
                    </a>
                  </li>
                </ul>
              </div>
              <input className="form-control" type="text" placeholder="Age" />
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Status
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Single
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Married
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Religion
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Catholic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      INC
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Islam
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Born Again
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-4">
              <h5>Education</h5>
              <div className="d-flex gap-3">
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Level of Education
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Elementary
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        High School
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        College
                      </a>
                    </li>
                  </ul>
                </div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Degree"
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Course"
                />
              </div>
            </div>

            <div className="mb-4">
              <h5>Skills</h5>
              <textarea
                className="form-control"
                placeholder="Skills"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-4">
              <h5>Language</h5>
              <div className="d-flex gap-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Language"
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Second Language"
                />
              </div>
            </div>

            <div className="mb-4">
              <h5>Address</h5>
              <div className="d-flex gap-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="House Number / Street"
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Barangay"
                />
              </div>
              <div className="d-flex gap-3 mt-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="City"
                />
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Philippines
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Japan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        North Korea
                      </a>
                    </li>
                  </ul>
                </div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Zip Code"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Link to="/application/thanks">
                <button
                  className="btn text-white button-style1"
                  style={{ backgroundColor: "#C31D25", padding: "8px 100px" }}
                >
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormThree;

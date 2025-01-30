import { Link } from "react-router";

const ApplicationFormOne = () => {
  return (
    <>
      <div
        className="container d-grid gap-5 "
        style={{
          padding: "50px 0px",
        }}
      >
        <div className="d-grid gap-3">
          <div className="">
            <div className="position-relative  mx-5">
              <div
                className="progress"
                role="progressbar"
                aria-label="Progress"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: "2px" }}
              >
                <div className="progress-bar" style={{ width: "25%" }}></div>
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
                className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-secondary rounded-pill"
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
          </div>
          <div className="card p-5">
            <h3>Basic Information</h3>
            <p>Please provide all the required information</p>
            <hr />
            {/* question1 */}
            <div className="d-grid gap-4">
              <div className="input-group mb-3">
                <ul className="list-unstyled d-grid gap-4">
                  <li>
                    <div className="d-flex align-items-center">
                      <input
                        className="form-control"
                        type="text"
                        name="option"
                        placeholder="First Name"
                      />
                      <input
                        className="form-control"
                        type="text"
                        name="option"
                        placeholder="Surname"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <input
                        className="form-control"
                        type="text"
                        name="option"
                        placeholder="Email Address"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <input
                        className="form-control"
                        type="text"
                        name="option"
                        placeholder="Mobile Number"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <input
                        className="form-control"
                        type="text"
                        name="option"
                        placeholder="Address"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex column-gap-3">
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          City
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Baguio
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Pangasinan
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Manila
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              La Union
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
                          State
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              State1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              State2
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              State3
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              State4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
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
                            USA
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Japan
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Canada
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Birthday */}
            <div className="d-grid gap-4">
              <h6 className="fw-bold p-0 m-0">Birthday</h6>
              <div className="input-group mb-3">
                <ul className="list-unstyled d-grid gap-4">
                  <li>
                    <div className="d-flex column-gap-3">
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Day
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              3
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              4
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
                          Month
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              3
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              4
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
                          Year
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              2000
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2001
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2002
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2003
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Gender */}
            <div className="d-grid gap-4">
              <h6 className="fw-bold p-0 m-0">
                2. Are you a software engineer or not?
              </h6>
              <div className="input-group mb-3">
                <ul className="list-unstyled d-grid gap-4">
                  <li>
                    <div className="d-flex align-items-center">
                      <input
                        className="form-check-input mt-0"
                        type="radio"
                        name="option"
                        value="yes"
                      />
                      <label htmlFor="yes-option" className="ms-2">
                        Male
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <input
                        className="form-check-input mt-0"
                        type="radio"
                        name="option"
                        value="no"
                        id="no-option"
                        aria-label="No"
                      />
                      <label htmlFor="no-option" className="ms-2">
                        Female
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* button1 */}
            <div className="text-center">
              <Link to="/application/form2">
                <button
                  className="btn text-white button-style1"
                  style={{
                    backgroundColor: "#C31D25",
                    padding: "8px 100px",
                  }}
                >
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationFormOne;

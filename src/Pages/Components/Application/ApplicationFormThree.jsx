import { Link } from "react-router";

const ApplicationFormThree = () => {
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
                <div className="progress-bar" style={{ width: "100%" }}></div>
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
                className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill"
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
            <h3>Application Form</h3>
            <p>Please provide all the required information</p>
            <hr />

            {/* forms */}
            <div className="d-grid gap-4">
              <div className="input-group mb-3">
                <ul className="list-unstyled d-grid gap-4">
                  <li>
                    <h5>Personal Details</h5>
                  </li>
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
                      <input
                        className="form-control"
                        type="text"
                        name="option"
                        placeholder="Prefix"
                      />
                    </div>
                  </li>
                  <li>
                    {/* gender age status religtion */}
                    <div className="d-flex column-gap-3">
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
                      <div className="d-flex align-items-center">
                        <input
                          className="form-control"
                          type="text"
                          name="option"
                          placeholder="Age"
                        />
                      </div>
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
                  </li>
                  {/* education */}
                  <li>
                    <h5>Education </h5>
                  </li>
                  <li>
                    <div className="d-flex column-gap-3">
                      <div className="d-grid gap-4">
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

                                  <input
                                    className="form-control"
                                    type="text"
                                    name="option"
                                    placeholder="Degree"
                                  />
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="option"
                                    placeholder="Course"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* skill */}
                  <li>
                    <textarea
                      className="form-control"
                      placeholder="Skills"
                      rows="3"
                    ></textarea>
                  </li>
                  {/* Language */}
                  <li>
                    <h5>Language </h5>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <input
                        className="form-control"
                        type="text"
                        name="option"
                        placeholder="Language"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="">
                      <input
                        className="form-control"
                        type="text"
                        name="option"
                        placeholder="Second Language"
                      />
                    </div>
                  </li>
                  {/* address */}
                  <li>
                    <h5>Address </h5>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <input
                        className="form-control"
                        type="text"
                        name="option"
                        placeholder="House Number / Street"
                      />
                      <input
                        className="form-control"
                        type="text"
                        name="option"
                        placeholder="Barangay"
                      />
                    </div>
                  </li>
                  
                  <li>
                    <div className="d-flex column-gap-3">
                      <div className="d-grid gap-4">
                        <div className="input-group mb-3">
                          <ul className="list-unstyled d-grid gap-4">
                            <li>
                              <div className="d-flex column-gap-3">
                                <div className="d-flex align-items-center">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="option"
                                    placeholder="City"
                                  />
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
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="">
                      <input
                        className="form-control"
                        type="text"
                        name="option"
                        placeholder="Zip Code"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* button */}
            <div className="text-center">
              <Link to="/application/thanks">
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

export default ApplicationFormThree;

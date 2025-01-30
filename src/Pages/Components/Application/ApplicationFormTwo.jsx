import { Link } from "react-router";

const ApplicationFOrmTwo = () => {
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
          </div>
          <div className="card p-5">
            <h3>Assessment Test</h3>
            <p>Please provide all the required information</p>
            <hr />
            {/* question1 */}
            <div className="d-grid gap-4">
              <h6 className="fw-bold p-0 m-0">
                1. Are you a software engineer or not?
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
                        id="yes-option"
                        aria-label="Yes"
                      />
                      <label htmlFor="yes-option" className="ms-2">
                        Yes
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
                        No
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* question 2 */}
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
                        id="yes-option"
                        aria-label="Yes"
                      />
                      <label htmlFor="yes-option" className="ms-2">
                        Yes
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
                        No
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* question3 */}
            <div className="d-grid gap-4">
              <h6 className="fw-bold p-0 m-0">
                3. Are you a software engineer or not?
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
                        id="yes-option"
                        aria-label="Yes"
                      />
                      <label htmlFor="yes-option" className="ms-2">
                        Yes
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
                        No
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* question4 */}
            <div className="d-grid gap-4">
              <h6 className="fw-bold p-0 m-0">4. Security Question</h6>
              <div className="input-group mb-3">
                <ul className="list-unstyled d-grid gap-4">
                  <li>
                    <div className="d-flex align-items-center">
                      <label htmlFor="yes-option" className="ms-2">
                        Mother’s Maiden Name
                      </label>
                      <input
                        className="form-control mt-0"
                        type="text"
                        name="option"
                        aria-label="Yes"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <label htmlFor="no-option" className="ms-2">
                        Phone Number
                      </label>
                      <input
                        className="form-control mt-0"
                        type="text"
                        name="option"
                        aria-label="No"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <label htmlFor="no-option" className="ms-2">
                        Security Question
                      </label>
                      <input
                        className="form-control mt-0"
                        type="text"
                        name="option"
                        aria-label="No"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              <Link to="/application/form3">
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

export default ApplicationFOrmTwo;

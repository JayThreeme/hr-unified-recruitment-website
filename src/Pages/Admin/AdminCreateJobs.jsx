import { Link } from "react-router";

const AdminCreateJobs = () => {
  const cities = ["Baguio", "Pangasinan", "Manila", "La Union"];
  const states = ["State1", "State2", "State3", "State4"];
  const countries = ["Philippines", "USA", "Japan", "Canada"];

  const renderDropdown = (options, label) => (
    <div className="d-flex align-items-center">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </button>
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index}>
            <a className="dropdown-item" href="#">
              {option}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div className="">
        <div className="d-flex gap-3 justify-content-start align-items-center">
          <h5 className="m-0">Create Jobs</h5>
        </div>

        {/* form */}
        <div className="card p-4 m-0">
          <div className="">
            <h3>Job Creation</h3>
            <p>Please provide all the required information</p>
            <hr />
            <div className="row">
              <div className="col ">
                <div className="d-grid gap-3">
                  <h6 className="fw-semibold mt-3 mb-0">Title</h6>
                  <div className="d-flex column-gap-0 input-group">
                    <input
                      className="form-control"
                      type="text"
                      name="first-name"
                      placeholder="Enter title"
                    />
                  </div>
                  <h6 className="fw-semibold mt-3 mb-0">Salary</h6>
                  <div className="d-flex column-gap-0 input-group">
                    <input
                      className="form-control"
                      type="text"
                      name="first-name"
                      placeholder="Enter Job Type"
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
              <div className="col">
                <div className="d-grid gap-3">
                  <div className="d-flex column-gap-3 input-group">
                    {/* Department */}
                    <div className="d-flex w-100" >
                      <h6 className="fw-semibold mt-3 me-4">Department</h6>
                      <div className="d-flex align-items-center " style={{width: "100px"}}>
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
                    </div>
                    {/* Job Type */}
                    <div className="d-flex w-100">
                      <h6 className="fw-semibold mt-3 me-4">Job type</h6>
                      <div className="d-flex align-items-center ">
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
                    </div>
                    {/* Language*/}
                    <div className="d-flex w-100">
                      <h6 className="fw-semibold mt-3 me-4">Language</h6>
                      <div className="d-flex align-items-center">
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

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCreateJobs;

{
  /* <div className="text-center">
<Link to="/application/form2">
  <button
    className="btn text-white button-style1"
    style={{ backgroundColor: "#C31D25", padding: "8px 100px" }}
  >
    Submit
  </button>
</Link>
</div> */
}

{
  /* <div className="input-group ">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div> */
}

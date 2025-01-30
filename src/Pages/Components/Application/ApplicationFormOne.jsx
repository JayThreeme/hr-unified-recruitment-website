import { Link } from "react-router";

const ApplicationFormOne = () => {
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
    <div className="container py-5">
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
            <div className="progress-bar" style={{ width: "25%" }}></div>
          </div>

          {["1", "2", "3"].map((step, index) => (
            <button
              key={step}
              type="button"
              className={`position-absolute top-0 translate-middle btn btn-sm rounded-pill ${
                index === 0 ? "btn-primary" : "btn-secondary"
              }`}
              style={{ width: "2rem", height: "2rem", left: `${index * 50}%` }}
            >
              {step}
            </button>
          ))}
        </div>

        <div className="d-flex justify-content-between w-100 mt-4">
          <p>Basic Info</p>
          <p className="ms-5">Assessment Test</p>
          <p>Application Form</p>
        </div>

        <div className="card p-5">
          <h3>Basic Information</h3>
          <p>Please provide all the required information</p>
          <hr />

          <div className="d-grid gap-4">
            <div className="input-group">
              <div className="d-flex gap-4">
                <input
                  className="form-control"
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                />
                <input
                  className="form-control"
                  type="text"
                  name="surname"
                  placeholder="Surname"
                />
              </div>
            </div>

            {/* Optimized Inputs */}
            <div className="input-group">
              <input
                className="form-control w-100"
                type="email"
                name="email"
                placeholder="Email Address"
                style={{ maxWidth: "480px" }} // Ensures the width is responsive but limits max-width
              />
            </div>

            <div className="input-group">
              <input
                className="form-control w-100"
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                style={{ maxWidth: "480px" }}
              />
            </div>

            <div className="input-group">
              <input
                className="form-control w-100"
                type="text"
                name="address"
                placeholder="Address"
                style={{ maxWidth: "480px" }}
              />
            </div>

            <div className="d-flex gap-3">
              {renderDropdown(cities, "City")}
              {renderDropdown(states, "State")}
              {renderDropdown(countries, "Country")}
            </div>

            <h6 className="fw-bold mt-3 mb-0">Birthday</h6>
            <div className="input-group ">
              <div className="d-flex gap-3">
                {/* Year Picker */}
                <input
                  className="form-control"
                  type="date"
                  name="birthday"
                  placeholder="Year"
                  style={{ maxWidth: "200px" }}
                  max={new Date().toISOString().split("T")[0]} // Restrict to the current date
                />
              </div>
            </div>

            <h6 className="fw-bold mt-3 mb-0">Gender</h6>
            <div className="input-group ">
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
            </div>

            <div className="text-center">
              <Link to="/application/form2">
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

export default ApplicationFormOne;

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
            <h3>Application Form</h3>
            <p>Please provide all the required information</p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationFormOne;

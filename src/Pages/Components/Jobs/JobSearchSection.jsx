const JobSearchSection = () => {
  return (
    <div
      className="text-white"
      style={{
        padding: "64px 0px",
        backgroundColor: "#C31D25",
      }}
    >
      <div className="container d-grid gap-4">
        <div className="row">
          <div className="col-md-7">
            <div className="d-flex gap-3">
              <div className="input-group flex-grow-1">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Job title"
                  style={{
                    fontSize: "16px",
                    color: "#D3D3D3",
                    padding: "16px 12px",
                  }}
                />
              </div>
              <div className="input-group flex-grow-1">
                <span className="input-group-text">
                  <i className="bi bi-pin"></i>
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Location"
                  style={{
                    fontSize: "16px",
                    color: "#D3D3D3",
                    padding: "16px 12px",
                  }}
                />
              </div>
              <button
                className="btn btn-lg w-50"
                style={{
                  fontSize: "16px",
                  backgroundColor: "#FFF",
                  color: "#c31d25",
                }}
              >
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchSection;

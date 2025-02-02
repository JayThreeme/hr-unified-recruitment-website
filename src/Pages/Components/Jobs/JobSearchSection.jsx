const JobSearchSection = () => {
  const jobCategories = [
    "Accounting",
    "Analyst",
    "Developer",
    "Communications",
    "Customer Service",
    "Data Science",
    "Web Developer",
    "Social Media Specialist",
    "Technical Support",
    "Virtual Assistant",
  ];

  return (
    <div
      className="text-white"
      style={{
        padding: "10px 10px",
        backgroundColor: "#EFF4F8",
      }}
    >
      <div className="container py-5 px-0">
        {/* Search Section */}
        <div className="row justify-content-start mb-3">
          <div className="col-md-8">
            <div className="row g-2">
              <div className="col-12 col-sm-8">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Search Job title or keywords"
                  style={{
                    fontSize: "16px",
                    color: "#555",
                    padding: "16px 12px",
                  }}
                />
              </div>
              <div className="col-12 col-sm-4 d-grid">
                <button
                  className="btn btn-lg"
                  style={{
                    fontSize: "16px",
                    backgroundColor: "#C31D25",
                    color: "#FFFF",
                  }}
                >
                  Search Jobs
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Job Categories */}
        <div className="row justify-content-start">
          <div className="col-md-8">
            <div className="d-flex flex-wrap justify-content-start gap-2 py-3">
              {jobCategories.map((category, index) => (
                <button
                  key={index}
                  className="btn btn-outline-danger rounded-pill px-4"
                  style={{
                    borderColor: "#C31D25",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchSection;

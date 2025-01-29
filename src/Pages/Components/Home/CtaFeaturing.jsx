import { useState } from "react";

const CtaFeaturing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const jobCategories = [
    "Accounting",
    "Analyst",
    "Developer",
    "Communications",
    "Customer Service",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <div className="container py-5 bg-light rounded-3">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-dark mb-4">
            Featuring <span className="text-decoration-underline">4,000</span>{" "}
            Online Jobs From{" "}
            <span className="text-decoration-underline">300</span> Companies
          </h1>
        </div>

        {/* Search Bar */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <form onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Keyword or title for remote jobs"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="btn btn-danger btn-lg d-flex align-items-center"
                  type="submit"
                >
                  <i className="bi bi-search me-2"></i>
                  Search Jobs
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Job Categories */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
              {jobCategories.map((category, index) => (
                <button
                  key={index}
                  className="btn btn-outline-danger rounded-pill px-4"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <h5 className="text-secondary">Search More Popular Jobs</h5>
        </div>
      </div>
      {/* <div className="position-absolute top-0 end-0 p-3">
        <div className="bg-warning rounded-circle p-3">
          <i className="bi bi-telegram text-white fs-4"></i>
        </div>
      </div> */}
    </div>
  );
};

export default CtaFeaturing;

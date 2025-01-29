import { useState } from "react";
import { Link } from "react-router";
import { CTAicon } from "../../../assets";
import "../../../Css/CTAHome.css";

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
    <>
      <div
        className="position-relative"
        style={{
          backgroundColor: "#000",
        }}
        // #F9FAFC
      >
        <div className="container section-padding">
          <div className="position-relative container d-grid gap-5 cta-padding">
            <div className="position-absolute top-0 end-0">
              <img
                src={CTAicon}
                alt="CTAicon"
                className=" img-fluid image-icon"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="text-center">
              <h1 className="display-5 fw-bold text-dark mb-4">
                Featuring{" "}
                <span className="text-decoration-underline">4,000</span> Online
                Jobs From <span className="text-decoration-underline">300</span>{" "}
                Companies
              </h1>
            </div>

            <div className="row justify-content-center">
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
                    <Link to="/jobs">
                      <button
                        className="btn btn-danger btn-lg d-flex align-items-center text-decoration-none"
                        type="submit"
                      >
                        <i className="bi bi-search me-2"></i>
                        Search Jobs
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="">
                <div className="d-flex flex-wrap justify-content-center gap-2 ">
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

            <div className="text-center">
              <Link to="/jobs">
                <button
                  className="btn text-white button-style1"
                  style={{
                    backgroundColor: "#C31D25",
                    padding: "8px 100px",
                  }}
                >
                  Find your next favorite job
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaFeaturing;

import { useNavigate } from "react-router";
import { heroimage } from "../../../assets";

const HeroHome = () => {
  const navigate = useNavigate();

  const searchjobnavigate = () => {
    setTimeout(() => {
      navigate("/jobs");
      window.scrollTo(0, 0);
    }, 500);
  };

  return (
    <>
      <div
        className="position-relative container-fluid min-vh-100  d-block d-md-flex align-items-center hero-section-background "
        style={{
          padding: "0px",
        }}
      >
        <div
          className=" container-xl d-flex justify-content-center hero-padding"
          style={{
            height: "100%",
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-3 fw-bold">
                Unifying Recruitment for Full-Time & Freelance Talent
              </h1>
              <p>
                Find the right job, the right way. Streamlined hiring for
                employers, simplified applications for candidates.
              </p>
              <div className="mt-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Job title "
                    style={{
                      fontSize: "16px",
                      color: "#D3D3D3",
                      padding: "16px 12px",
                    }}
                  />
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

                  <button
                    className="btn btn-danger btn-lg button-style1"
                    style={{ fontSize: "16px" }}
                    onClick={searchjobnavigate}
                  >
                    Search Jobs
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 d-flex justify-content-end align-item"
              // style={{
              //   height: "100%",
              // }}
            >
              <img src={heroimage} alt="Job Search" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHome;

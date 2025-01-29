import { heroimage } from "../../../assets";

const HeroHome = () => {
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
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Job title or keyword"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                  />
                  <button className="btn btn-danger">Search Jobs</button>
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

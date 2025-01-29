import { howitworks } from "../../../assets";

const HowItWorks = () => {
  return (
    <>
      <div
        className="container d-grid gap-5 section-padding"
        // style={{
        //   padding: "100px 0px",
        // }}
      >
        <div className="d-grid gap-3">
          <h2 className="fw-semibold p-0 text-center  m-0 p-0">
            How it works?
          </h2>
          <p className=" fw-normal text-center  m-0 p-0">
            How HR Unified Recruitment will help our job seeker and employers.
          </p>
        </div>
        <div className="row align-items-center ">
          <div className="col-md-6 d-grid gap-4">
            <div className="d-grid gap-4">
              <h4 className="fw-bold p-0 m-0">For Job Seekers</h4>
              <ul className="list-unstyled d-grid gap-4">
                <li>
                  <p>
                    <i className="bi bi-search me-2"></i>
                    Search and apply for jobs in one click.
                  </p>
                </li>
                <li>
                  <p>
                    <i className="bi bi-person-check me-2"></i>
                    Get matched with jobs based on your skills and experience.
                  </p>
                </li>
                <li>
                  <p>
                    <i className="bi bi-file-text me-2"></i>
                    Simple application process, easy to track your progress.
                  </p>
                </li>
              </ul>
            </div>
            <div className="d-grid gap-4">
              <h4 className="fw-bold p-0 m-0">For Employers</h4>
              <ul className="list-unstyled d-grid gap-4">
                <li>
                  <p>
                    <i className="bi bi-clipboard me-2"></i>
                    Post jobs and review candidates in a unified platform.
                  </p>
                </li>
                <li>
                  <p>
                    <i className="bi bi-person-lines-fill me-2"></i>
                    Evaluate candidates with comprehensive profiles and smart
                    match features.
                  </p>
                </li>
                <li>
                  <p>
                    <i className="bi bi-speedometer me-2"></i>
                    Streamlined process from posting to hiring, saving you time.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <img src={howitworks} alt="howitworks" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;

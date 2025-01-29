import { howitworks } from "../../../assets";

const HowItWorks = () => {
  return (
    <>
      <div className="container my-5">
        <h2 className=" mb-4 fw-bold">How it works?</h2>
        <p className="text-muted">How HR Unified Recruitment Works</p>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold">For Job Seekers</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-search me-2"></i>
                Search and apply for jobs in one click.
              </li>
              <li className="mb-3">
                <i className="bi bi-person-check me-2"></i>
                Get matched with jobs based on your skills and experience.
              </li>
              <li className="mb-3">
                <i className="bi bi-file-text me-2"></i>
                Simple application process, easy to track your progress.
              </li>
            </ul>
            <h4 className="fw-bold">For Employers</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-clipboard me-2"></i>
                Post jobs and review candidates in a unified platform.
              </li>
              <li className="mb-3">
                <i className="bi bi-person-lines-fill me-2"></i>
                Evaluate candidates with comprehensive profiles and smart match
                features.
              </li>
              <li className="mb-3">
                <i className="bi bi-speedometer me-2"></i>
                Streamlined process from posting to hiring, saving you time.
              </li>
            </ul>
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

const HowItWorks = () => {
  return (
    <>
      <div className="container my-5">
        <h2 className="text-center mb-5">How it works?</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>For Job Seekers</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-search me-2"></i>
                Search and apply for jobs that match your skills
              </li>
              <li className="mb-3">
                <i className="bi bi-person-badge me-2"></i>
                Get connected with jobs based on your skills and experience
              </li>
              {/* Add more steps */}
            </ul>
          </div>
          <div className="col-md-6">
            <h4>For Employers</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-people me-2"></i>
                Post jobs and review candidates in a unified platform
              </li>
              {/* Add more steps */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;

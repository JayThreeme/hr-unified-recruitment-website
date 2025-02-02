const JobFilters = () => {
  return (
    <div className="bg-white py-4">
      <div className="container">
        <div className="d-flex flex-wrap gap-2">
          <div>
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Job Type
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Full-Time
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Remote
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Part-time
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Industry
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Information Technology
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Customer Service
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Finance & Marketing
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Salary Range
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    10,000 - 20,000
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    20,000 - 30,000
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    30,000 - 40,000
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Experience Level
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Entry Level
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mid-Senior Level
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Senior Level
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Veteran Level
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Location
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Philippines
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    USA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    North Korea
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    China
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Jobs</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Search
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default JobFilters;

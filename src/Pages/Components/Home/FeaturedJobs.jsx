import { Link } from "react-router";

const FeaturedJobs = () => {
  const jobs = [
    {
      title: "Finance Accountant",
      location: "Manila, Philippines",
      salary: "Salary range",
      type: "Today",
      status: ["Remote", "Flexible"],
    },
    {
      title: "Software Engineer",
      location: "Cebu, Philippines",
      salary: "Salary range",
      type: "Today",
      status: ["On-Site"],
    },
    {
      title: "Marketing Specialist",
      location: "Davao, Philippines",
      salary: "Salary range",
      type: "Today",
      status: ["Hybrid", "Flexible"],
    },
    {
      title: "Project Manager",
      location: "Makati, Philippines",
      salary: "Salary range",
      type: "Today",
      status: ["Remote"],
    },
    {
      title: "UI/UX Designer",
      location: "Quezon City, Philippines",
      salary: "Salary range",
      type: "Today",
      status: ["Remote", "Part-Time"],
    },
    {
      title: "Data Analyst",
      location: "Taguig, Philippines",
      salary: "Salary range",
      type: "Today",
      status: ["Hybrid"],
    },
    {
      title: "Customer Support Representative",
      location: "Pasig, Philippines",
      salary: "Salary range",
      type: "Today",
      status: ["On-Site", "Night Shift"],
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      salary: "Salary range",
      type: "Today",
      status: ["Remote", "Flexible"],
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#F9FAFC",
      }}
    >
      <div className="container section-padding d-grid gap-5">
        <div className="d-grid gap-3">
          <h2 className="fw-semibold p-0 text-center m-0">
            Explore Top Jobs Today
          </h2>
          <p className="fw-normal text-center m-0">
            We have the best job listing you can ever find!
          </p>
        </div>
        <div className="row">
          {jobs.map((job, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card">
                <div className="card-body d-grid gap-5">
                  <div className="d-grid gap-3">
                    <div className="d-flex justify-content-between w-100">
                      <h6 className="m-0">{job.type}</h6>
                      <h6
                        className="m-0 fw-semibold"
                        style={{
                          color: "#C31D25",
                        }}
                      >
                        New!
                      </h6>
                    </div>
                    <div>
                      <h5 className="card-title mt-2 fw-semibold">
                        {job.title}
                      </h5>

                      <div className="mb-2">
                        {job.status.map((status, idx) => (
                          <span
                            key={idx}
                            className="badge me-1 fw-medium"
                            style={{
                              backgroundColor: "#EFEFEF",
                              color: "#343A40",
                            }}
                          >
                            {status}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <p className="card-text">
                        <i className="bi bi-geo-alt me-2"></i>
                        {job.location}
                      </p>
                    </div>

                    <div className="d-flex justify-content-end w-100">
                      <Link to="/jobs">
                        <button
                          className="btn fw-medium"
                          style={{
                            color: "#126396",
                          }}
                        >
                          Apply
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/jobs">
            <button
              className="btn text-white"
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
  );
};

export default FeaturedJobs;

const FeaturedJobs = () => {
  const jobs = [
    {
      title: "Finance Accountant",
      location: "Manila, Philippines",
      salary: "Salary range",
      type: "Today",
    },
    {
      title: "Finance Accountant",
      location: "Manila, Philippines",
      salary: "Salary range",
      type: "Today",
    },
    {
      title: "Finance Accountant",
      location: "Manila, Philippines",
      salary: "Salary range",
      type: "Today",
    },
    {
      title: "Finance Accountant",
      location: "Manila, Philippines",
      salary: "Salary range",
      type: "Today",
    },
    {
      title: "Finance Accountant",
      location: "Manila, Philippines",
      salary: "Salary range",
      type: "Today",
    },
    {
      title: "Finance Accountant",
      location: "Manila, Philippines",
      salary: "Salary range",
      type: "Today",
    },
    {
      title: "Finance Accountant",
      location: "Manila, Philippines",
      salary: "Salary range",
      type: "Today",
    },
    {
      title: "Finance Accountant",
      location: "Manila, Philippines",
      salary: "Salary range",
      type: "Today",
    },
    // Add more jobs
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Explore Top Jobs Today</h2>
      <div className="row">
        {jobs.map((job, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">
                  <i className="bi bi-geo-alt me-2"></i>
                  {job.location}
                </p>
                <button className="btn btn-outline-danger btn-sm">Apply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-danger">Find your next favorite job</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;

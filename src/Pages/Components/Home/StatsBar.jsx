const StatsBar = () => {
  const stats = [
    { number: "50k", label: "Job Posts" },
    { number: "500", label: "Jobs Posted Per Day" },
    { number: "5k", label: "Employers Active" },
    { number: "5yrs", label: "In Business" },
  ];
  return (
    <div className=" text-white py-4">
      <div className="container bg-danger">
        <div className="row text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3">
              <h2 className="fw-bold">{stat.number}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;

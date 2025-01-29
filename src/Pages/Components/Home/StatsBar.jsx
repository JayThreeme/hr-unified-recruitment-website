const StatsBar = () => {
  const stats = [
    { number: "50k", label: "Job Posts" },
    { number: "500", label: "Jobs Posted Per Day" },
    { number: "5k", label: "Employers Active" },
    { number: "5yrs", label: "In Business" },
  ];
  return (
    <div className="text-white section-padding">
      <div
        className="container"
        style={{
          padding: "27px 0px",
          backgroundColor: "#C31D25",
          borderRadius: "20px",
        }}
      >
        <div className="row text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3">
              <h2 className="fw-bold m-0 p-0 display-3">{stat.number}</h2>
              <p className="text-white m-0 p-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;

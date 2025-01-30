import ReactECharts from "echarts-for-react";

const AdminDashboard = () => {
  const status = [
    {
      value: "35",
      title: "New Candidates",
      color: "#93CA79",
    },
    {
      value: "15",
      title: "New Applicants",
      color: "#FEDB6A",
    },
    {
      value: "11",
      title: "Rejected",
      color: "#EC6769",
    },
    {
      value: "15",
      title: "In Process",
      color: "#FA8458",
    },
    {
      value: "113",
      title: "Total Candidates",
      color: "#5572C3",
    },
  ];

  const pie = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };

  const bar = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ["product", "2012", "2013", "2014", "2015"],
        ["Matcha Latte", 41.1, 30.4, 65.1, 53.3],
        ["Milk Tea", 86.5, 92.1, 85.7, 83.1],
        ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4],
      ],
    },
    xAxis: [
      { type: "category", gridIndex: 0 },
      { type: "category", gridIndex: 1 },
    ],
    yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
    grid: [{ bottom: "55%" }, { top: "55%" }],
    series: [
      // These series are in the first grid.
      { type: "bar", seriesLayoutBy: "row" },
      { type: "bar", seriesLayoutBy: "row" },
      { type: "bar", seriesLayoutBy: "row" },
      // These series are in the second grid.
      { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
      { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
      { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
      { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
    ],
  };
  return (
    <>
      <div className="">
        <div className="d-flex gap-3 justify-content-start align-items-center">
          <h5 className="m-0">Dashboard</h5>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Fulltime
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Remote
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Part-time
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Intern
              </a>
            </li>
          </ul>
        </div>

        {/* status bars */}
        <div className=" card p-4">
          <div className="row d-flex gap-3">
            {status.map((status, idx) => (
              <div key={idx} className="col mx-0 px-0">
                <div
                  className="card"
                  style={{ backgroundColor: status.color, width: "160px" }}
                >
                  <div className="card-body text-center fw-semibold p-0 m-0 ">
                    <h1>{status.value}</h1>
                  </div>
                  <div
                    className="card-footer text-body-secondary p-0 m-0 text-center "
                    style={{ backgroundColor: "#fff" }}
                  >
                    <p>{status.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <ReactECharts
              echarts={echarts}
              option={this.getOption()}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
              onChartReady={this.onChartReadyCallback}
              onEvents={EventsDict}
              opts={pie}
            /> */}

        {/* charts */}
        <div className="card ">
          {/* left */}
          <div className="row">
            <div className="col-md-6">
              <ReactECharts option={pie} style={{ height: 100 }} />
            </div>
            {/* right */}
            <div className="col-md-6">
              <ReactECharts option={bar} style={{ height: 500 }} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="card-title m-0">Title</h5>
                  <div className="d-flex gap-2">
                    <select
                      className="form-select form-select-sm"
                      style={{ width: "120px" }}
                    >
                      <option>Metric</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                    <select
                      className="form-select form-select-sm"
                      style={{ width: "120px" }}
                    >
                      <option>Today</option>
                      <option>Yesterday</option>
                      <option>Last Week</option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <ReactECharts option={pie} style={{ height: 100 }} />
                </div>
              </div>
            </div>
            {/* right */}
            <div className="col-md-6">
              <ReactECharts option={bar} style={{ height: 500 }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

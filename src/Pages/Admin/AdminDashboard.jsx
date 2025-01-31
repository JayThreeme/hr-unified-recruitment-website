import ReactECharts from "echarts-for-react";
import { status, pie, bar, line, bartwo } from "../../Information/AdminInfo";

const AdminDashboard = () => {
  return (
    <>
      <div className="">
        <div className="d-flex gap-3 justify-content-start align-items-center mb-2">
          <h5 className="m-0">Dashboard</h5>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#" >
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
        <div className="card p-3 mb-2">
          <div className="row d-flex justify-content-around gap-2">
            {status.map((status, idx) => (
              <div key={idx} className="col mx-0 px-0 " >
                <div
                  className="card"
                  style={{ backgroundColor: status.color, width: "100%" }}
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
        <div className="card p-2 mb-2">
          {/* left */}
          <div className="row">
            <div className="col-md-6">
              <ReactECharts option={bar} style={{ width: "100%" }} />
            </div>
            {/* right */}
            <div className="col-md-6">
              <ReactECharts option={pie} style={{ width: "100%" }} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ReactECharts option={line} style={{ width: "100%" }} />
            </div>
            {/* right */}
            <div className="col-md-6">
              <ReactECharts option={bartwo} style={{ width: "100%" }} />
            </div>
          </div>
          {/* <div className="row">
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
   
            <div className="col-md-6">
              <ReactECharts option={line} style={{ height: 500 }} />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

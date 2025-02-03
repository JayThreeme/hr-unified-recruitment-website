import ReactECharts from "echarts-for-react";
import { status, pie, bar, line, bartwo } from "../../Information/AdminInfo";

const AdminDashboard = () => {
  return (
    <>
      <div className="">
        <div className="d-flex gap-5 justify-content-start align-items-center mb-3 py-2">
          <h5 className="m-0">Dashboard</h5>
          {/* <ul className="nav">
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
          </ul> */}
        </div>

        {/* status bars */}
        <div className="mb-3">
          <div className="d-flex justify-content-between gap-2">
            {status.map((status, idx) => (
              <div
                key={idx}
                className="flex-fill"
                style={{ minWidth: "150px" }}
              >
                <div
                  className="card pb-0"
                  style={{ backgroundColor: status.color, width: "100%" }}
                >
                  <div className="card-body text-center fw-semibold p-3">
                    <h1
                      className=" fw-bold"
                      style={{
                        color: "#333",
                      }}
                    >
                      {status.value}
                    </h1>
                  </div>
                  <div
                    className="card-footer text-body-secondary text-center py-2"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <p>{status.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* charts */}
        <div className="card p-2 mb-3">
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


        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

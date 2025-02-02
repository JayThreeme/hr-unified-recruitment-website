import ReactECharts from "echarts-for-react";
import { pie, bar, line, bartwo } from "../../Information/AdminInfo";

const AdminReportAnalytics = () => {
  return (
    <>
      <div className="">
        <div className="d-flex gap-5 justify-content-start align-items-center mb-3 py-2">
          <h5 className="m-0">Report and Analytics</h5>
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

export default AdminReportAnalytics;

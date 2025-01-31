import { howitworks } from "../../../assets";
const OurMission = () => {
  return (
    <>
      <div
        className="container d-grid gap-5 section-padding"
        // style={{
        //   padding: "100px 0px",
        // }}
      >
        <div className="row align-items-center ">
          <div className="col-md-6">
            <img src={howitworks} alt="howitworks" className="img-fluid" />
          </div>

          <div className="col-md-6 d-grid gap-4">
            <div className="d-grid gap-4">
              <h2 className="fw-bold p-0 m-0">Our Mission</h2>
              <p>To simplify and streamline the recruitment journey by connecting qualified candidates with the right opportunities while ensuring a smooth, effective, and transparent hiring experience.</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;

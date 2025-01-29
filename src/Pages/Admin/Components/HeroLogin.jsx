import { heroimage } from "../../../assets";

const HeroLogin = () => {
  return (
    <>
      <div
        className="position-relative container-fluid min-vh-100  d-block d-md-flex align-items-center hero-section-background "
        style={{
          padding: "0px",
        }}
      >
        <div
          className=" container-xl d-flex justify-content-center hero-padding"
          style={{
            height: "100%",
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-3 fw-bold">Login</h1>
              <p>log</p>
            </div>
            <div
              className="col-md-6 d-flex justify-content-end align-item"
              // style={{
              //   height: "100%",
              // }}
            >
              <img src={heroimage} alt="Job Search" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLogin;

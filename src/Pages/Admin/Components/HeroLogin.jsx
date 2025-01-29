import { Link } from "react-router";
import { hrunifiedlogosvg } from "../../../assets";
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
            <div className="container d-flex justify-content-center align-items-center">
              <div className="card p-4 shadow" style={{ width: "350px" }}>
                <div className="text-center mb-4">
                  <img
                    src={hrunifiedlogosvg}
                    alt="HR Unified Recruitment"
                    style={{ width: "100%" }}
                    className="img-fluid"
                  />
                </div>
                <h6 className="mb-3">Login</h6>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <Link to="/admin/dashboard">
                    <button className="btn btn-danger w-100 button-style1">
                      Login
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLogin;

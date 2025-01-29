import { Link } from "react-router";
import { hrunifiedlogosvgwhitetwo } from "../../assets";

const Footer = () => {
  return (
    <>
      <footer
        className="text-white"
        style={{
          backgroundColor: "#C31D25",
        }}
      >
        <div className="container section-padding w-auto">
          <div className="row d-flex justify-content-between ">
            <div className="col-md-4">
              <div
                className="d-flex flex-column justify-content-between align-items-start gap-3"
                style={{
                  height: "100%",
                }}
              >
                <div className="">
                  <img
                    src={hrunifiedlogosvgwhitetwo}
                    alt="logo"
                    className="img-fluid"
                    style={{
                      height: "65px",
                    }}
                  />
                </div>
                <div className="">
                  <a href="#" className="text-white me-5 fs-2">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="text-white me-5 fs-2">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="text-white me-5 fs-2">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-white me-5 fs-2">
                    <i className="bi bi-reddit"></i>
                  </a>
                </div>
                <div className="">
                  <p className="text-white">All Rights Reserved @ 2025</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="row justify-content-end">
                <div className="col-md-6 d-flex flex-column gap-3">
                  <h5 className="fw-semibold">Quick Links</h5>
                  <ul className="list-unstyled d-flex flex-column gap-3">
                    <li>
                      <Link
                        to="/"
                        className="text-white text-decoration-none fw-normal"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="text-white text-decoration-none fw-normal"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/jobs"
                        className="text-white text-decoration-none fw-normal"
                      >
                        Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="text-white text-decoration-none fw-normal"
                      >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 d-flex flex-column gap-3">
                  <h5>Job Resources</h5>
                  <ul className="list-unstyled d-flex flex-column gap-3">
                    <li>
                      <a
                        href="#"
                        className="text-white text-decoration-none fw-normal"
                      >
                        Work from home jobs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white text-decoration-none fw-normal"
                      >
                        Full-time jobs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white text-decoration-none fw-normal"
                      >
                        Part-time jobs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white text-decoration-none fw-normal"
                      >
                        Make money online
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

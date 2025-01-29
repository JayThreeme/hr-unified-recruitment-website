import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src="/logo-white.png" alt="HR Unified" height="40" />
              <div className="mt-3">
                <a href="#" className="text-white me-3">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/about" className="text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="text-white">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Job Resources</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Work from home jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Full-time jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Part-time jobs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

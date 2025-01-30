import { Link } from "react-router";

import { hrunifiedlogosvg } from "../../../assets";
const ApplicationFormThanks = () => {
  return (
    <>
      <div
        className="container d-grid gap-5 "
        style={{
          padding: "50px 0px",
        }}
      >
        <div className="d-grid gap-3">
          <div className="card p-5">
            <h3>Application Confirmation</h3>
            <p>
              Applicant wll see the following notification for completion of
              their application
            </p>
            <ul>
              <li>
                <p>
                  Applicant will receive an email that his/her application is in
                  review and HR will in contact within 3 days.
                </p>
              </li>
              <li>
                <p>
                  HR will also send applicant login information to check on the
                  status application{" "}
                </p>
              </li>
            </ul>
            <hr />

            {/* thanks information */}
            <div className="py-5">
              <div className="d-grid gap-4 align-items-center">
                <img src={hrunifiedlogosvg} alt="logo" className="img-fluid" style={{
                  width: "40%",
                  objectFit: "cover",
                }}/>
                <h1 className="fw-semibold">Thank You</h1>
                <h2 className="fw-semibold">for completing your application</h2>
                <p className="" style={{color: "#C31D25"}}>You will recieve an email notification shortly.</p>
              </div>
            </div>

            {/* button */}
            <div className="text-center">
              <Link to="/application/thanks">
                <button
                  className="btn text-white button-style1"
                  style={{
                    backgroundColor: "#C31D25",
                    padding: "8px 100px",
                  }}
                >
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationFormThanks;

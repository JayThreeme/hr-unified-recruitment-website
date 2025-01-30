import { Link } from "react-router";
import { hrunifiedlogosvg } from "../../../assets";

const ApplicationFormThanks = () => {
  return (
    <div className="container py-5">
      <div className="card p-5">
        <h3>Application Confirmation</h3>
        <p>
          The applicant will see the following notification upon completion of
          their application:
        </p>
        <ul>
          <li>
            <p>
              The applicant will receive an email confirming their application
              is under review, and HR will contact them within 3 days.
            </p>
          </li>
          <li>
            <p>
              HR will also send login information to allow the applicant to
              check the status of their application.
            </p>
          </li>
        </ul>
        <hr />

        <div className="text-center py-5">
          <img
            src={hrunifiedlogosvg}
            alt="logo"
            className="img-fluid"
            style={{ width: "25%", objectFit: "cover" }}
          />
          <h1 className="fw-semibold mt-5">Thank You</h1>
          <h2 className="fw-semibold">for completing your application</h2>
          <p style={{ color: "#C31D25" }} className="mt-5">
            You will receive an email notification shortly.
          </p>

          <Link to="/">
            <button
              className="btn text-white button-style1 mt-1"
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
  );
};

export default ApplicationFormThanks;

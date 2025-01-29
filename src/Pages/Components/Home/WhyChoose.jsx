import { whyhr1, whyhr2, whyhr3 } from "../../../assets";

const WhyChoose = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold">Why HR Unified Recruitment?</h2>
      <p className="text-center text-muted">We have the best platform</p>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-center p-4 shadow-sm">
            <img
              src={whyhr1}
              className="card-img-top"
              alt="Efficient Process"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Efficient Process</h5>
              <p className="card-text text-muted">
                From job posting to hiring, everything is streamlined for both
                employers and candidates.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-4 shadow-sm">
            <img
              src={whyhr2}
              className="card-img-top"
              alt="Wide Range of Opportunities"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">
                Wide Range of Opportunities
              </h5>
              <p className="card-text text-muted">
                Whether you’re looking for a full-time role or a freelance gig,
                we’ve got you covered.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-4 shadow-sm">
            <img
              src={whyhr3}
              className="card-img-top"
              alt="Easy-to-Use Platform"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Easy-to-Use Platform</h5>
              <p className="card-text text-muted">
                User-friendly design for a smooth experience on any device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

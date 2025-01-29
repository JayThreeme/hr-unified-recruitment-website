import { whyhr1, whyhr2, whyhr3 } from "../../../assets";

const WhyChoose = () => {
  return (
    <div className="container section-padding d-grid gap-5">
      <div className="d-grid gap-3">
        <h2 className="text-center fw-semibold m-0 p-0">
          Why HR Unified Recruitment?
        </h2>
        <p className="text-center  m-0 p-0">We have the best platform</p>
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-center p-4 shadow-sm">
            <img
              src={whyhr1}
              className="card-img-top img-fluid"
              alt="Efficient Process"
            />
            <div className="card-body d-grid gap-2">
              <h5 className="card-title fw-bold m-0">Efficient Process</h5>
              <p className="card-text ">
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
              className="card-img-top img-fluid"
              alt="Wide Range of Opportunities"
            />
            <div className="card-body d-grid gap-2">
              <h5 className="card-title fw-bold m-0">
                Wide Range of Opportunities
              </h5>
              <p className="card-text ">
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
              className="card-img-top img-fluid"
              alt="Easy-to-Use Platform"
            />
            <div className="card-body d-grid gap-2">
              <h5 className="card-title fw-bold m-0">Easy-to-Use Platform</h5>
              <p className="card-text">
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

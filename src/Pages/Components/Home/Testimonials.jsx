import { profile1, profile2, profile4, profile5 } from "../../../assets";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Accounting Manager",
      image: profile4,
      feedback:
        "From job posting to hiring, everything is streamlined for both employers and candidates.",
      rating: 5,
    },
    {
      name: "Sarah Lee",
      role: "Hiring Manager",
      image: profile1,
      feedback:
        "As an employer, I was able to find qualified candidates quickly, and the platform's features helped me make informed decisions.",
      rating: 5,
    },
    {
      name: "Mark Li",
      role: "Software Engineer",
      image: profile2,
      feedback:
        "I managed to find work fast on this platform. Find me a good fit job based on my skillset.",
      rating: 5,
    },
    {
      name: "Sam Dee",
      role: "Web Developer",
      image: profile5,
      feedback:
        "From job posting to hiring, everything is streamlined for both employers and candidates.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <i key={index} className="bi bi-star-fill text-warning"></i>
    ));
  };

  return (
    <div className="container section-padding d-grid gap-5">
      <div className="d-grid gap-3">
        <h2 className="fw-semibold p-0 text-center m-0">What Our Users Say</h2>
        <p className="fw-normal text-center m-0">
          From our Employers and Employees
        </p>
      </div>

      <div className="row g-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card h-100 border-1 shadow-sm d-flex flex-column">
              <div className="card-body text-center d-flex flex-column align-items-center">
                <div className="mb-3">
                  <div
                    className="mx-auto"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle img-fluid border"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="d-grid gap-1 mb-2">
                  <h5 className="card-title m-0">{testimonial.name}</h5>
                  <p className="text-muted small m-0">{testimonial.role}</p>
                </div>
              </div>

              <div className="card-body text-center flex-grow-1 d-flex align-items-center justify-content-center">
                <p className="card-text text-muted m-0 p-0">
                  {testimonial.feedback}
                </p>
              </div>

              <div className="card-footer text-center">
                <div className="d-flex justify-content-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

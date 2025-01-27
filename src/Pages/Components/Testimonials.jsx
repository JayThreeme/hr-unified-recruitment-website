const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Freelance Developer",
      image: "/john-doe-avatar.png",
      feedback:
        "From job posting to hiring, everything is streamlined for both employers and candidates.",
      rating: 5,
    },
    {
      name: "Sarah Lee",
      role: "Hiring Manager",
      image: "/sarah-lee-avatar.png",
      feedback:
        "As an employer, I was able to find qualified candidates quickly, and the platform's features helped me make informed decisions.",
      rating: 5,
    },
    {
      name: "Mark Li",
      role: "Freelance Developer",
      image: "/mark-li-avatar.png",
      feedback:
        "I managed to find work fast on this platform. Find me a good fit job based on my skillset.",
      rating: 5,
    },
    {
      name: "Sam Dee",
      role: "Freelance Developer",
      image: "/sam-dee-avatar.png",
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
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="display-6 fw-bold mb-2">What Our Users Say</h2>
        <p className="text-muted">From our Employers and Employees</p>
      </div>

      <div className="row g-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                {/* Avatar */}
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

                {/* Name and Role */}
                <h5 className="card-title mb-1">{testimonial.name}</h5>
                <p className="text-muted small mb-3">{testimonial.role}</p>

                {/* Feedback */}
                <p className="card-text text-muted mb-3">
                  {testimonial.feedback}
                </p>

                {/* Rating */}
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

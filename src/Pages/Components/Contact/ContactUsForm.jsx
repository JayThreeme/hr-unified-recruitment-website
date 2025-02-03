const ContactUsForm = () => {
  return (
    <div
      className="container d-grid gap-5 section-padding"
      // style={{
      //   padding: "100px 0px",
      // }}
    >
      <div className="row align-items-center ">
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <p>Amsterdam Office</p>
          <p>
            NMS PRODUCTIONS EUROPE B.V.Herengracht 257, 1016 BJ, Amsterdam, The
            Netherlands
          </p>
          <h5>Phone</h5>
          <p>+63 999 9999 999</p>
          <p>+63 222 9999 999</p>
        </div>

        <div className="col-md-6 d-grid gap-4">
          <div className="d-grid gap-3">
            <input
              className="form-control form-control-lg w-100"
              type="name"
              name="namr"
              placeholder="Name"
            />
            <input
              className="form-control form-control-lg w-100"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="form-control form-control-lg w-100"
              type="text"
              name="phone"
              placeholder="Phone"
            />
            <input
              className="form-control form-control-lg w-100"
              type="text"
              name="industry"
              placeholder="Industry"
            />
            <textarea
              className="form-control mb-3"
              rows="5"
              placeholder="Message"
              style={{ color: "#868686" }}
            />
            <button
              className="btn btn-danger btn-lg  text-decoration-none button-style1"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;

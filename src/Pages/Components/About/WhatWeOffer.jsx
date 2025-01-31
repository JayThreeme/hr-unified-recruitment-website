import { howitworks } from "../../../assets";
const WhatWeOffer = () => {
  return (
    <>
      <div
        className="container d-grid gap-5 section-padding"
        // style={{
        //   padding: "100px 0px",
        // }}
      >
        <div className="row align-items-center ">
          

          <div className="col-md-6 d-grid gap-4">
            <div className="d-grid gap-4">
              <h2 className="fw-bold p-0 m-0">What We Offer</h2>
              <ul className="d-grid gap-4">
                <li>
                  <p>
                  Unified Hiring Process: Bringing together full-time and freelance opportunities in one easy-to-navigate platform. 
                  </p>
                </li>
                <li>
                  <p>
                  Efficient Application System: Save time with an optimized process that ensures only qualified candidates move forward. 
                  </p>
                </li>
                <li>
                  <p>
                  User-Friendly Experience: Our intuitive design makes applying and hiring stress-free for everyone involved. 
                  </p>
                </li>
                <li>
                  <p>
                  Informative Support: We prioritize transparency and clarity at every stage, so you’re always informed.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <img src={howitworks} alt="howitworks" className="img-fluid" />
          </div>

        </div>
      </div>
    </>
  );
};
export default WhatWeOffer;

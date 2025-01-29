import {
  amazon,
  apple,
  ibm,
  microsoft,
  nvdia,
  oracle,
  png,
  wallmart,
} from "../../../assets";

import "../../../Css/marquescroll.css";

const Companies = () => {
  const images = [
    { url: amazon, alt: "amazon" },
    { url: apple, alt: "apple" },
    { url: ibm, alt: "ibm" },
    { url: microsoft, alt: "microsoft" },
    { url: nvdia, alt: "nvdia" },
    { url: oracle, alt: "oracle" },
    { url: png, alt: "png" },
    { url: wallmart, alt: "wallmart" },
  ];

  return (
    <div
      className="text-white"
      style={{
        padding: "64px 0px",
        backgroundColor: "#C31D25",
      }}
    >
      <div className="container-fluid d-grid gap-4">
        <div className="">
          <h2 className="text-center fw-bold">
            Top Companies Hiring for Remote Jobs!
          </h2>
        </div>
        <div className=" scrolling-container ">
          <div className="scrolling-content">
            {images.map((image, index) => (
              <div key={index} className="scrolling-item">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="img-fluid"
                  style={{ height: "35px", objectFit: "contain" }}
                />
              </div>
            ))}

            {images.map((image, index) => (
              <div key={`duplicate-${index}`} className="scrolling-item">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="img-fluid"
                  style={{ height: "35px", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;

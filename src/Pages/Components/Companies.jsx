import amazon from "../../assets/companies/amazon.png";
import apple from "../../assets/companies/apple.png";
import ibm from "../../assets/companies/ibm.png";
import microsoft from "../../assets/companies/microsoft.png";
import nvdia from "../../assets/companies/nvdia.png";
import oracle from "../../assets/companies/oracle.png";
import png from "../../assets/companies/p&g.png";
import wallmart from "../../assets/companies/wallmart.png";

import "../../Css/marquescroll.css";

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
    <div className="bg-danger text-white py-4">
      <div className="container-fluid">
        <h2 className="text-center mb-4">Our Sponsors</h2>
        <div className=" scrolling-container">
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

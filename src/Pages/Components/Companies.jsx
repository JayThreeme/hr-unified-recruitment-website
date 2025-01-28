import React from 'react'


import webflow from "../../assets/companies/webflow.png";
import relume from "../../assets/companies/relume.png";
import wordpress from "../../assets/companies/wordpress.png";


const Companies = () => {

      const image = [{ url: webflow, alt: "Job Posts" },
        { url: relume, alt: "Job Posts" },
        { url: wordpress, alt: "Job Posts" },

      ];
  return (
    <div className="bg-danger text-white py-4">
      <div className="container">
        <div className="row text-center">
          {image.map((image, index) => (
            <div key={index} className="col-md-3">
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies
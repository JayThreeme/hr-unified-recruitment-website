const GoogleMaps = () => {
  return (
    <div
      className="container d-grid gap-5 section-padding"
      // style={{
      //   padding: "100px 0px",
      // }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366.5784540219283!2d4.884890799769107!3d52.37178937591062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60964f30f3997%3A0xf78421c1b62193cc!2sNMS%20Productions%20BV!5e0!3m2!1sen!2sph!4v1738546901652!5m2!1sen!2sph"
        className="w-100"
        style={{height:"450px", border: "0px"}}
    
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;

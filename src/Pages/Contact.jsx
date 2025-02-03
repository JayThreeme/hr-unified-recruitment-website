import ContactUsForm from "./Components/Contact/ContactUsForm";
import GoogleMaps from "./Components/Contact/GoogleMaps";
import HeroContact from "./Components/Contact/HeroContact";
import Companies from "./Components/Home/Companies";

const Contact = () => {
  return (
    <>
      <HeroContact />
      <Companies />
      <ContactUsForm/>
      <GoogleMaps />
    </>
  );
};

export default Contact;

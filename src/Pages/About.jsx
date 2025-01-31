import HeroAbout from "./Components/About/HeroAbout";
import Companies from "./Components/Home/Companies";
import WhyChoose from "./Components/Home/WhyChoose";
import OurMission from "./Components/About/OurMission";
import WhatWeOffer from "./Components/About/WhatWeOffer";

const About = () => {
  return (
    <>
      <HeroAbout />
      <Companies/>
      <OurMission/>
      <WhatWeOffer/>
      <WhyChoose/>
      
    </>
  );
};

export default About;

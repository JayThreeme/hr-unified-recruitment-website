//import React from 'react'

import Companies from "./Components/Home/Companies";
import CtaFeaturing from "./Components/Home/CtaFeaturing";
import FeaturedJobs from "./Components/Home/FeaturedJobs";
import HeroHome from "./Components/Home/HeroHome";
import HowItWorks from "./Components/Home/HowItWorks";
import StatsBar from "./Components/Home/StatsBar";
import Testimonials from "./Components/Home/Testimonials";

const Home = () => {
  return (
    <>
      <HeroHome />
      <Companies />
      <HowItWorks />
      <StatsBar />
      <Testimonials />
      <FeaturedJobs />
      <CtaFeaturing />
    </>
  );
};

export default Home;

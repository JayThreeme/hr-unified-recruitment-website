//import React from 'react'

import Companies from "./Components/Companies";
import CtaFeaturing from "./Components/CtaFeaturing";
import FeaturedJobs from "./Components/FeaturedJobs";
import HeroHome from "./Components/HeroHome";
import HowItWorks from "./Components/HowItWorks";
import StatsBar from "./Components/StatsBar";
import Testimonials from "./Components/Testimonials";

const Home = () => {
  return (
    <>
      <HeroHome />
      <Companies/>
      <HowItWorks />
      <StatsBar />
      <Testimonials />
      <FeaturedJobs />
      <CtaFeaturing />
    </>
  );
};

export default Home;

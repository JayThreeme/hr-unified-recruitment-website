import HeroJobs from "./Components/Jobs/HeroJobs";
import JobFilters from "./Components/Jobs/JobFilters";
import JobSearchResult from "./Components/Jobs/JobSearchResult";
import JobSearchSection from "./Components/Jobs/JobSearchSection";

const Jobs = () => {
  return (
    <>
      <HeroJobs />
      <JobSearchSection />
      <JobFilters/>
      <JobSearchResult />
    </>
  );
};

export default Jobs;

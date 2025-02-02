import { useState, useEffect } from "react";
import HeroJobs from "./Components/Jobs/HeroJobs";
import JobFilters from "./Components/Jobs/JobFilters";
import JobSearchResult from "./Components/Jobs/JobSearchResult";
import JobSearchSection from "./Components/Jobs/JobSearchSection";

const Jobs = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to handle scrolling to the job search result section
  const scrollToSearchResult = () => {
    const jobSearchResultElement = document.getElementById("job-search-result");
    jobSearchResultElement?.scrollIntoView({ behavior: "smooth" });
  };

  // Hook to handle scroll visibility of the button
  useEffect(() => {
    const handleScroll = () => {
      const jobSearchResultElement =
        document.getElementById("job-search-result");

      if (jobSearchResultElement) {
        const rect = jobSearchResultElement.getBoundingClientRect();
        const isAtBottom = rect.bottom <= window.innerHeight + 500;

        // Show the button when the bottom of JobSearchResult is visible
        setShowButton(isAtBottom);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeroJobs />
      <JobSearchSection />
      <JobFilters />

      <div id="job-search-result">
        <JobSearchResult />
      </div>

      {/* Only show the button when showButton is true */}
      {showButton && (
        <button
          onClick={scrollToSearchResult}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            padding: "10px 10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            fontSize: "18px",
            cursor: "pointer",
            width: "50px",
            height: "50px",
          }}
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default Jobs;

import { Outlet } from "react-router";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import ApplicationTitle from "./Components/Application/ApplicationTitle";

const Application = () => {
  return (
    <>
      <Navigation />
      <div
        className=""
        style={{
          height: "90px",
        }}
      ></div>
      <ApplicationTitle />
      <Outlet />
      <Footer />
    </>
  );
};

export default Application;

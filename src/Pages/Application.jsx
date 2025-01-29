import { Outlet } from "react-router";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

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
      <Outlet />
      <Footer />
    </>
  );
};

export default Application;

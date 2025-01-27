import { Outlet } from "react-router";
import "./App.css";

import Navigation from "./Components/Navigation";
import Footer from "./Pages/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

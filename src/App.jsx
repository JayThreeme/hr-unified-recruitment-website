import { Outlet } from "react-router";

import Navigation from "./Pages/Components/Navigation";
import Footer from "./Pages/Components/Footer";

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

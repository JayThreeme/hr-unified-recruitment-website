// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Jobs from "./Pages/Jobs";
import Contact from "./Pages/Contact"
import Login from "./Pages/Login";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Route>
      {/* <Route path="/user" element={<User />}>
        <Route index element={<Dashboard />} />
      </Route> */}
    </Routes>
  </BrowserRouter>
);
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

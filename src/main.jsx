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
import Contact from "./Pages/Contact";
import Login from "./Pages/Admin/Login";

import Application from "./Pages/Application";
import ApplicationFormOne from "./Pages/Components/Application/ApplicationFormOne";
import ApplicationFormTwo from "./Pages/Components/Application/ApplicationFormTwo";
import ApplicationFormThree from "./Pages/Components/Application/ApplicationFormThree";
import ApplicationFormThanks from "./Pages/Components/Application/ApplicationFormThanks";

import Dashboard from "./Pages/Admin/Dashboard";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminApplicant from "./Pages/Admin/AdminApplicants";
import AdminJobs from "./Pages/Admin/AdminJobs";
import AdminCalendar from "./Pages/Admin/AdminCalendar";
import AdminStudioAccount from "./Pages/Admin/AdminStudioAccount";



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
      <Route path="/application" element={<Application />}>
        <Route index path="form1" element={<ApplicationFormOne />} />
        <Route path="form2" element={<ApplicationFormTwo />} />
        <Route path="form3" element={<ApplicationFormThree />} />
        <Route path="thanks" element={<ApplicationFormThanks />} />
      </Route>
      <Route path="/admin" element={<Dashboard />}>
        <Route index path="dashboard" element={<AdminDashboard />} />
        <Route path="applicants" element={<AdminApplicant />} />
        <Route path="jobs" element={<AdminJobs />} />
        <Route path="calendar" element={<AdminCalendar />} />
        <Route path="studioaccount" element={<AdminStudioAccount />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

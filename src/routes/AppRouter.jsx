import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Layout from "../layouts/Layout";
import ScrollToTop from "../components/ScrollToTop";
import { useAuth } from "../utils/idb";
import { useEffect } from "react";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import Appointment from "../pages/appointment/Appointment";
import PolicyPage from "../pages/policies/PolicyPage";
import { privacyPolicy, termsAndConditions, medicalDisclaimer, appointmentPolicy } from "../data/policies";

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Restaurant Routes (NO layout) */}
        <Route path="/login" element={<p>Login</p>} />

        <Route element={<PrivateRoute />}>
        </Route>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/privacy-policy" element={<PolicyPage title="Privacy Policy" content={privacyPolicy} />} />
          <Route path="/terms-conditions" element={<PolicyPage title="Terms and Conditions" content={termsAndConditions} />} />
          <Route path="/medical-disclaimer" element={<PolicyPage title="Medical Disclaimer" content={medicalDisclaimer} />} />
          <Route path="/appointment-policy" element={<PolicyPage title="Appointment Policy" content={appointmentPolicy} />} />
        </Route>

      </Routes>
    </Router>
  );
}

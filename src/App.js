import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import EnvironmentalAssessment from './pages/EnvironmentalAssessment';
import PassiveActiveDesign from "./pages/PassiveActiveDesign";
import CommissioningServices from "./pages/CommissioningServices";
import BuildingPerformance from "./pages/BuildingPerformance";
import WholeLifeCarbon from "./pages/WholeLifeCarbon";
import ESGandSustainabilityReports from "./pages/ESGandSustainabilityReports";

function App() {
  return (
    <Router>
      <div className="app-container">

        <Navbar />

        <div className="page-content">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/environmental-assessment" element={<EnvironmentalAssessment />} />
            <Route path="/passive-active-design" element={<PassiveActiveDesign />} />
            <Route path="/services/commissioning" element={<CommissioningServices />} />
            <Route path="/building-performance-verification" element={<BuildingPerformance />} />
            <Route path="/whole-life-carbon"  element={<WholeLifeCarbon />} />
            <Route path="/esg-sustainability-reports" element={<ESGandSustainabilityReports />}
/>

          </Routes>
        </div>

        <Footer />

      </div>
    </Router>
  );
}
export default App;
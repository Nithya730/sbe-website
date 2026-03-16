import React from "react";
import "./PassiveActiveDesign.css";

function PassiveActiveDesign() {
  return (
    <div className="design-page">

    <div className="design-title">
      <h1 >Passive & Active Design Analyses</h1>
    </div>
      <div className="design-container">

        {/* Passive Design */}
        <div className="design-card">
          <h2>Passive Design Analyses</h2>
          <ul>
            <li>Climate and Site Analysis</li>
            <li>Building Orientation Study</li>
            <li>Daylight Optimisation</li>
            <li>Natural Ventilation Assessment</li>
            <li>Building Envelope Optimisation</li>
          </ul>
        </div>

        {/* Active Design */}
        <div className="design-card">
          <h2>Active Design Analyses</h2>
          <ul>
            <li>HVAC System</li>
            <li>Lighting System</li>
            <li>Energy Modelling</li>
            <li>Building Controls & Automation</li>
            <li>Thermal Comfort Analysis</li>
          </ul>
        </div>

      </div>

      <div className="design-synthesis">
        <h2>Design Synthesis</h2>
        <p>
          Integrating sustainability engineering performance and architecture 
          into a cohesive high-performance building strategy.
        </p>
      </div>

    </div>
  );
}

export default PassiveActiveDesign;
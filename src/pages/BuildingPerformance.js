import React from "react";
import "./ServiceLayout.css";

function BuildingPerformance() {
  return (
    <section className="service-page">

      {/* Banner */}
      <div className="service-banner">
       
          <h1>Building Performance Verification</h1>
        </div>
  

      {/* Content */}
      <div className="service-container">

        {/* Card 1 */}
        <div className="service-card">
          <h2>Building Operation Verification</h2>

          <ul>
            <li>Operational Data Analysis</li>
            <li>Energy Modelling Recalibration</li>
            <li>Operating System Efficiency of the Chiller Plant System</li>
          </ul>
        </div>


        {/* Card 2 */}
        <div className="service-card">
          <h2>Building Operation Optimisation</h2>

          <ul>
            <li>Development of Policy Frameworks for Energy, Carbon, Water, and Waste Management</li>
            <li>Energy Efficiency Retrofit Advisory</li>
            <li>Decarbonisation Strategy Advisory</li>
            <li>Net-Zero Target Setting and Roadmap Advisory</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default BuildingPerformance;
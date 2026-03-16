import React from "react";
import "./ServiceLayout.css";

function WholeLifeCarbon() {
  return (
    <section className="service-page">

      {/* Banner */}
      <div className="service-banner">
       
          <h1>Whole Life Carbon Assessment</h1>
        </div>
      

      {/* Content */}
      <div className="service-container">

        {/* Card 1 */}
        <div className="service-card">
          <h2>Whole Life Carbon Assessment</h2>

          <ul>
            <li>Buildings</li>
            <li>Materials</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <h2>Decarbonization Advisory</h2>

          <ul>
            <li>Whole life carbon assessment for buildings and infrastructure</li>
            <li>Embodied carbon analysis of materials and construction systems</li>
            <li>Operational carbon modelling and lifecycle emissions evaluation</li>
            <li>Carbon reduction pathways aligned with net-zero targets</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default WholeLifeCarbon;
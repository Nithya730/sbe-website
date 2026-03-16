import React from "react";
import "./ServiceLayout.css";

function CommissioningServices() {
  return (
    <section className="service-page">

      {/* Banner */}
      <div className="service-banner">
        <h1>Third-party Building Commissioning Services</h1>
      </div>

      {/* Content */}
      <div className="service-container">

        {/* CARD 1 */}
        <div className="service-card">
          <h2>Commissioning Roles</h2>

          <ul>
            <li>Employer Representative</li>
            <li>LEED CxA</li>
          </ul>
        </div>


        {/* CARD 2 */}
        <div className="service-card">
          <h2>Commissioning Support</h2>

          <ul>
            <li>Advisory support for building systems commissioning</li>
            <li>Review of commissioning plans, procedures, and documentation</li>
            <li>Coordination with project teams to verify system performance</li>
            <li>Support for testing, balancing, and functional performance verification</li>
            <li>
              Ensuring systems operate as intended to meet design and sustainability objectives
            </li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default CommissioningServices;
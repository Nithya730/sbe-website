import React from "react";
// import AboutUs from "../components/AboutUs";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section id="aboutUs" className="about-section">

      <div className="container">

        {/* ABOUT US */}
        <div className="about-block">
          <h2 className="section-title">About Us</h2>

          <div className="content-box">
            <p>
              At <b>STABILITET Built-Environment</b>, 
              Consultants is a specialized engineering and sustainability advisory
              firm founded by seasoned industry professionals with diverse
              international experience across the built environment sector. We provide holistic consultancy 
              services that support organisations in improving the environmental performance, resilience, 
              and long-term value of their built asset portfolios. Our services integrate engineering expertise with
               Environmental, Social, and Governance (ESG) principles to help clients evaluate, optimise, and manage 
               sustainability performance across design, construction, and operational stages.
            </p>

            <p>
              By combining technical engineering insight with global sustainability frameworks 
              and reporting practices, we assist asset owners, developers, and operators in aligning their portfolios
              with evolving regulatory expectations, certification systems, and responsible investment goals.
            </p>
          </div>
        </div>

{/* IGBC Logo */}
        <div className="about-logo">
          <img
            src="/images/Member_Logo.jpg"
            alt="IGBC Member"
          />
        </div>

        {/* VISION */}
        <div id="vision" className="about-block">
          <h2 className="section-title">Our Vision</h2>

          <div className="content-box">
            <p>
              To create a sustainable and resilient built environment that balances
              engineering innovation, environmental responsibility, and long-term
              value for communities and businesses.
            </p>
          </div>
        </div>


        {/* MISSION */}
        <div id="mission" className="about-block">
          <h2 className="section-title">Our Mission</h2>

          <div className="content-box">
            <p>
              To empower organizations with advanced engineering solutions,
              green building strategies, and environmental governance that
              contribute to a healthier planet and sustainable infrastructure.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default AboutUs;
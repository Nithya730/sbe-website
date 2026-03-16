import React from "react";
import "./Footer.css";

function Footer() {
  return (
    
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div>
          <h3>STABILITET BUILT-ENVIRONMENT</h3>
          <p>Engineering the Equilibrium</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Our Story</li>
            <li>Portfolio</li>
            <li>Lead News</li>
            <li>Careers</li>

            <li>Contact with Us</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: projects@sbe-consultants.com</p>
          <p>Phone: +91 7339051854 </p>
        </div>
      </div>

     <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} STABILITET BUILT-ENVIRONMENT. All rights reserved.
        </span>

       
      </div>

    </footer>
  );
}

export default Footer;
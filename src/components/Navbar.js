import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
        <nav className="navbar">
    
        <div className="logo">
            <Link to="/">
            STABILITET BUILT-ENVIRONMENT
            <p>Engineering the Equilibrium</p>
            </Link>
        </div>
        


        <ul className="nav-links">  

         {/* ABOUT US */}
        <li>
        <Link to="/about">About Us</Link>
        </li>



        {/* OUR STORY */}
        <li
            className="dropdown"
            onClick={() =>
            setActiveMenu(activeMenu === "ourStory" ? null : "ourStory")
            }
        >
            Our Story ▾
            {activeMenu === "ourStory" && (
            <ul className="dropdown-menu">
            <li>
                <a href="#vision">Our Vision</a>
            </li>

            <li>
                <a href="#mission">Our Mission</a>
            </li>

            
            </ul>
          )}
        </li>


    
        {/* SERVICES */}

       

        <li
            className="dropdown"
            onClick={() =>
                setActiveMenu(activeMenu === "services" ? null : "services")
            }
        >
            Services ▾
            {activeMenu === "services" && (
            <ul className="dropdown-menu">

            <li>
                <Link to="/environmental-assessment">Environmental Assessment Systems </Link>
                
               
            </li>

            <li>
                <Link to="/passive-active-design">
                Passive Design Analyses
                </Link>
            </li>

            <li>
               <Link to="/services/commissioning">
               Third-party Building Commissioning Services
            </Link>

            </li>

            <li>
                <Link to="/building-performance-verification">
                Building Performance Verification
                </Link>
            </li>

            <li>
                <Link to="/whole-life-carbon">
                Whole Life Carbon Assessment
                </Link>
            </li>

            <li>
                <Link to="/esg-sustainability-reports">
                ESG and Sustainability Reports
                </Link>
            </li>

        </ul>
        )}
        </li>


        {/* CONTACT US */}
        <li>
            <Link to="/contact">Contact Us</Link>
        </li>


        
      </ul>
    
    </nav>
  );
}



export default Navbar;




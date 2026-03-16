import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">

      {/* Banner */}
      <div className="contact-banner">
        <div className="banner-overlay">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="container">

        <div className="contact-wrapper">

          {/* Contact Details */}
          <div className="contact-details">

            <h3>Our Office</h3>

            <p>
              STABILITET Built-Environment Consultants
            </p>

            <p>
              Coimbatore, India
            </p>

            <p>
              Email: projects@sbe-consultants.com
            </p>

            <p>
              Phone: +91 7339051854
            </p>

          </div>


          {/* Contact Form */}
          <form className="contact-form">

            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;
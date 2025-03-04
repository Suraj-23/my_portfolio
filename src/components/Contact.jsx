import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <p
        className="section__text__p1"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Get in Touch
      </p>
      <h1 className="title" data-aos="fade-up" data-aos-duration="2000">
        Contact Me
      </h1>
      <div
        className="contact-info-upper-container"
        data-aos="zoom-out"
        data-aos-duration="4000"
      >
        <div className="contact-info-container">
          <img
            src={require("../assets/email.png")}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:surajarude@icloud.com">surajarude@icloud.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={require("../assets/linkedin.png")}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a
              href="https://www.linkedin.com/in/suraj-arude-9a4998188/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1" data-aos="fade-up">
        Get To Know More
      </p>
      <h1 className="title" data-aos="fade-up">
        About Me
      </h1>
      <div className="section-container">
        <div
          className="section__pic-container"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div
              className="details-container"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                src={require("../assets/experience.png")}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                <li>Data Scientist<br/>@ Meganexus Ind Pvt. Ltd. Pune.</li>
                <br />
                <li>Data Scientist intern<br />@ AI Variant. Bangalore</li>
                <br />
              
              </p>
            </div>
            <div
              className="details-container"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                src={require("../assets/education.png")}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.Sc Bachelor of Science
              </p>
              <br/>
              <img src={require("../assets/certificate.png")}
                alt="certificate icon"
                className="icon"
                />
              <h3>Certifications</h3>
              <p>
              <li>Certificate Program in Data Science using Machine Learning with R and Python (IBM)</li>
              <li>Data Visualization (IBM)</li>
              <li>Data Science Certificate (ExcelR) </li>
              <li>Artificial Intelligence with Python</li>
              <li>Application of cloud computing</li>
              </p>
            </div>
          </div>
          <div className="text-container">
            <p data-aos="zoom-in" data-aos-duration="1000">
            Experienced Data Scientist | AI & ML Enthusiast | Data Automation & Engineering. Results-driven Data Scientist with over 2+ years of experience in analyzing complex datasets, developing AI-driven solutions, and building scalable data pipelines. Proficient in Python, SQL, and Azure, with expertise in designing and optimizing large-scale data processing systems. Specialized in Generative AI, Machine Learning (ML), and Natural Language Processing (NLP), with hands-on experience leveraging Large Language Models (LLMs) for automation and AI-driven applications. Developed frameworks for structured learning pathways using Chat Completions models and optimized resume enhancement using AI-based job alignment strategies.
            </p>
          </div>
        </div>
      </div>
      <img
        src={require("../assets/arrow.png")}
        alt="Arrow icon"
        className="icon arrow"
        data-aos="fade-down"
        onClick={() => (document.location.href = "./#experience")}
        // href="#experience"
      />
    </section>
  );
};

export default About;

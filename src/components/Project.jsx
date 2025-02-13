import React, { useRef } from "react";
import Car from "../assets/Cars.jpg";
import Work from "../assets/AdventureWorks_Logo.jpeg";
import Bank from "../assets/Bank.jpeg";
import Market from "../assets/stock.jpg";

const Project = () => {
  const project = [
    {
      imageUrl: Market,
      projectName: "stock market forecast",
      id: 0,
      live:"https://github.com/shraddesh1998/Forecasting_Project",
      githubLink: "https://github.com/shraddesh1998/Forecasting_Project",
    },
    {
      imageUrl:Bank,
      projectName: "Bank-Loan-Analysis",
      id: 3,
      live: "https://github.com/shraddesh1998/Bank-Loan-Analysis",
      githubLink: "https://github.com/shraddesh1998/Bank-Loan-Analysis",
    },
    {
      imageUrl: Car,
      projectName: "Cars Price peredication",
      id: 1,
      live: "https://github.com/shraddesh1998/Cars-Price-Prediction/",
      githubLink: "https://github.com/shraddesh1998/Cars-Price-Prediction",
    },
    {
      imageUrl: Work,
      projectName: "Adventure Works",
      id: 2,
      live: "https://github.com/shraddesh1998/Adventure_Works",
      githubLink: "https://github.com/shraddesh1998/Adventure_Works",
    },

    
  ];

  const cardsRef = useRef(null);

  const handleLeftClick = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft -= 500;
    }
  };
  
  const handleRightClick = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += 500;
    }
  };

  return (
    <section id="projects">
      <p className="section__text__p1" data-aos="fade-up">
        Browse My Recent
      </p>
      <h1 className="title" data-aos="fade-up">
        Projects
      </h1>
      <div className="experience-details-container">
        <div className="arrows">
          <i
            className="ri-arrow-left-s-line ri-4x iconColor left"
            onClick={handleLeftClick}
          ></i>
        </div>
        <div className="about-containers  sliderDiv" ref={cardsRef}>
          {project.map((pro) => (
            <div
              key={pro.id}
              className="details-container color-container card"
              data-aos="zoom-in-down"
            >
              <div className="article-container">
                <img
                  src={pro.imageUrl}
                  alt={pro.projectName}
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                {pro.projectName}
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = pro.githubLink)}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = pro.live)}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <i
            className="ri-arrow-right-s-line ri-4x iconColor right"
            onClick={handleRightClick}
          ></i>
        </div>
      </div>
      <img
        src={require("../assets/arrow.png")}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
};

export default Project;

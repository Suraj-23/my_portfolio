import React from "react";
import Gen_AI from "../assets/Gen_AI.png";
import LLM from "../assets/LLM.png";
import Python from "../assets/Python.png";
import R from "../assets/R.png";
import Flask from "../assets/Flask.png";
import Streamlit from "../assets/Streamlit.png";
import SQL from "../assets/SQL.png";
import MONGODB from "../assets/mongodb.png";
import Microsoft_Azure from "../assets/Azure.png";
import Machine_Learning from "../assets/Machine-learning.png";
import AI from "../assets/AI.png";
import GIT from "../assets/GIT.png";
import Postman from "../assets/Postman.png";
import Openlens from "../assets/Openlens.png";
import Agile_Methodologies from "../assets/Agile.png";
import PowerBI from "../assets/Power Bi.png";
import Tableau from "../assets/Tableau.png";
import Excel from "../assets/Excel.png";
import Seaborn from "../assets/Seaborn.png";
import Matplotlib from "../assets/Matplotlib.png";
import Plotly from "../assets/Plotly.png";


const Experience = () => {
  const Technical = [
    { name: "Gen AI", src: Gen_AI, experiences: "Intermediate", id: 1 },
    { name: "LLM's", src: LLM, experiences: "Intermediate", id: 1 },
    { name: "Python", src: Python, experiences: "Experienced", id: 2 },
    { name: "Flask", src: Flask, experiences: "Intermediate", id: 1 },
    { name: "Streamlit", src: Streamlit, experiences: "Intermediate", id: 1 },
    { name: "R", src: R, experiences: "Intermediate", id: 3 },
    { name: "SQL", src: SQL, experiences: "Experienced", id: 4 },
    { name: "MongoDB", src: MONGODB, experiences: "Intermediate", id: 3 },
    { name: "Microsoft Azure", src: Microsoft_Azure, experiences: "Experienced", id: 5 },
    { name: "Machine Learning", src: Machine_Learning, experiences: "Experienced", id: 1 },
    { name: "Artificial Intelligence", src: AI, experiences: "Intermediate", id: 0 },
    { name: "Git", src: GIT, experiences: "Experienced", id: 5 },
    { name: "Postman", src: Postman, experiences: "Experienced", id: 0 },
    { name: "Openlens", src: Openlens, experiences: "Intermediate", id: 1 },
    { name: "Agile Methodologies", src: Agile_Methodologies, experiences: "Experienced", id: 5 },
  ];

  const Analytical  = [
    { name: "Power BI", src: PowerBI, experiences: "Experienced", id: 8 },
    { name: "Tableau", src: Tableau, experiences: "Experienced", id: 0 },
    { name: "Microsoft Excel", src: Excel, experiences: "Experienced", id: 7 },
    { name: "Seaborn", src: Seaborn, experiences: "Experienced", id: 8 },
    { name: "Matplotlib", src: Matplotlib, experiences: "Experienced", id: 0 },
    { name: "Plotly", src: Plotly, experiences: "Experienced", id: 7 },
  ];
  return (
    <section id="experience">
      <p className="section__text__p1" data-aos="fade-up">
        Explore My
      </p>
      <h1 className="title" data-aos="fade-up">
        Skills
      </h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div
            className="details-container"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <h2 className="experience-sub-title">Technical Skills</h2>
            <div className="article-container">
              {Technical.map((skill) => (
                <article
                  key={skill.id}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img src={skill.src} alt="Experience icon" className="icon" />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.experiences}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div
            className="details-container"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <h2 className="experience-sub-title">Analytical Skills</h2>
            <div className="article-container">
              {Analytical.map((skill) => (
                <article
                  key={skill.id}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img src={skill.src} alt="Experience icon" className="icon" />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.experiences}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src={require("../assets/arrow.png")}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
};

export default Experience;

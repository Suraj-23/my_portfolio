import React from "react";

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={require("../assets/Suraj_Dp.jpg")}
          alt="Suraj-Pic"
          id="profile-logo"
          data-aos="fade-right" 
          data-aos-delay="50"
        />
      </div>
      <div className="section__text" data-aos="fade-left" data-aos-delay="50">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Suraj Arude</h1>
        <p className="section__text__p2">Data Scientist</p>
        <div className="btn-container">
          <a
            href="https://drive.google.com/file/d/1yAO9pDTyQcjvAygloLhXI08CdS-xJYej/view?usp=sharing"
            //href="https://www.canva.com/design/DAGLL_yviQo/7eJibI_rf1Q4kokduCghlA/view?utm_content=DAGLL_yviQo&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            download="Suraj Arude"
            type="pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="btn btn-color-2"
              // onClick={() => window.open("../assets/Shraddhesh Datkhile.pdf")}
            >
              Download CV
            </button>
          </a>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/suraj-arude-9a4998188/"
            type="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../assets/linkedin.png")}
              alt="My LinkedIn profile"
              className="icon"
              // onClick={() =>
              //   (window.location.href =
              //     "https://www.linkedin.com/in/shraddhesh-datkhile-839806227/")
              // }
            />
          </a>
          <a
            href="https://github.com/Suraj-23"
            type="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../assets/github.png")}
              alt="My Github profile"
              className="icon"
              onClick={() =>
                (window.location.href = "https://github.com/Suraj-23")
              }
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;

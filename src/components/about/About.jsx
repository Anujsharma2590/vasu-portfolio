import React from "react";
import "./About.css";
import Image from "../../assets/vasu-me.png";

import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello! I'm Vasukumar, and I'm based in Gujrat, India. I studied at
              P P Savani University Surat, Gujarat(India), where I completed my
              graduation in Information and Technology and currently pursuing a
              Master's degree at Queensland University of Technology in
              Australia.
              <br />
              <br />
              With over a year of experience as an Android developer and six
              months as a Delivery Partner, I've garnered valuable insights into
              the ever-evolving tech industry. These roles have not only
              deepened my understanding of software development but also
              instilled in me a strong sense of adaptability and
              problem-solving.
              <br />
              <br />
              Beyond my professional pursuits, I find solace in casual gaming,
              where I immerse myself in virtual worlds for relaxation and mental
              stimulation. Alongside this, my passion for travelling fuels my
              desire to explore new cultures and broaden my horizons. I believe
              in maintaining balance in life, embracing Diversity and Inclusion,
              and advocating for sustainability. My ultimate goal is to
              establish myself as a successful figure in Information Technology,
              with a long-term aspiration of founding my own IT firm focused on
              innovation and excellence.
              <br />
              <br />
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="about__list">
              <li>JavaScript (ES6+)</li>
              <li>PHP</li>
              <li>React</li>
              <li>Android</li>
              <li>python</li>
            </ul>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name"> Mobile Development</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Data Analyst</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;

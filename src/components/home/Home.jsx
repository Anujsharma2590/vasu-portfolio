import React from "react";
import "./Home.css";
import vasu from '../../assets/vasu.png'
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

 const cv =
   "https://drive.google.com/file/d/1AU1UQqolcvAz_JKr3THHnPzK01UvXCPB/view";
const Home = () => {
  const downloadResume = async () => {
     window.open(cv, "_blank");
  };
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={vasu} alt="" className="home__img" width="150" />
        <h1 className="home__name">Vasukumar Chanchapara</h1>
        <span className="home__education">
          I am currently pursuing a Master's degree at Queensland University of
          Technology in Australia.{" "}
        </span>

        <HeaderSocials />

        <button className="btn" onClick={downloadResume}>
          Donwload CV
        </button>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

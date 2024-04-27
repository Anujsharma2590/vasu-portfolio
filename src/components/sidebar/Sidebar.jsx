import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.svg";
import { Hamburger } from "../../assets/hamburger";

const Sidebar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className={scrolled ? "header-with-border" : ""}>
      <a href="#home" className="nav-logo">
        <img src={logo} alt="logo" />
      </a>
      <nav className={`nav-elements  ${showNavbar && "active"}`}>
        <div className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#resume" className="nav-link">
                Work
              </a>
            </li>

            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                Project
              </a>
            </li>

            <li className="nav-item">
              <a href="#blog" className="nav-link">
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <Hamburger />
      </div>
    </header>
  );
};

export default Sidebar;

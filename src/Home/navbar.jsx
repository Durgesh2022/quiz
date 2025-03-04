import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [industriesDropdownVisible, setIndustriesDropdownVisible] = useState(false);
  const [aboutUsDropdownVisible, setAboutUsDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIndustriesDropdown = () => {
    setIndustriesDropdownVisible(!industriesDropdownVisible);
    setAboutUsDropdownVisible(false);
  };

  const handleAboutUsDropdown = () => {
    setAboutUsDropdownVisible(!aboutUsDropdownVisible);
    setIndustriesDropdownVisible(false);
  };

  const closeDropdowns = () => {
    setIndustriesDropdownVisible(false);
    setAboutUsDropdownVisible(false);
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="nav">
        <div className="logo">
          <Link to="/" className="nav-link">Qorvia-AI</Link>
        </div>
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/coming-soon" className="nav-link">About Us</Link>
          <Link to="/coming-soon" className="nav-link">Products and Services</Link>

          

          

          <Link to="/contact-us" className="nav-link">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

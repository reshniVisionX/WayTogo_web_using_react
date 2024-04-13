import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";


const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth" 
  });
};

function NavBar() {
  

  return (
    <div>
      <div className="header-nav">
        <div className="head-container">
          <h1 style={{ display: "inline-block" }}>
            <span style={{ color: "#0ceedf" }}>Way</span>{" "}
            <span style={{ color: "#170234" }}>To</span>Go{" "}
          </h1>
          <img
            src="logos/logo.png"
            alt="logo"
            style={{ display: "inline-block", height: "50px", width: "50px" }}
          />
        </div>
        <div className="navbar">
          <h3 onClick={scrollToTop}>
            <Link to="/" >Home</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/trending">Trending</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/destinations">Our Destinations</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/resources">Resources</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/services">Our Services</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/contact">Contact us</Link>
          </h3>
          
          <Link to="/register">
        <button style={{ width: "auto" }} onClick={scrollToTop}>
          Signup
        </button>
      </Link>
       
      </div>

      </div>
    </div>
  );
}

export default NavBar;


import chillImage from '../assets/chill.png';
import "./navbar.css"; 
import React from 'react';

export default function Navbar() {
  return (
    <nav className="nav navbar fixed-top navbar-expand-md ">
      <a
        href="/about"
        className="float-start fw-semibold ps-4 d-none d-md-block Name-Right"
        style={{
          color: "#27325c",
          fontFamily: "public-sans",
          textDecoration: "none", 
          fontSize: "40px",
        }}
      >
        Lauren Langbort 
        <img src={chillImage} alt="" width="80" className="ps-2 align-items-center"/>
      </a>  
      <a
        href="/about"
        className="float-start fw-semibold ps-4 d-block d-md-none Name-Right"
        style={{
          color: "#27325c",
          fontFamily: "public-sans",
          textDecoration: "none", 
          fontSize: "40px",
        }}
      >
        LCL
        <img src={chillImage} alt="" width="80" className="ps-2 align-items-center"/>
      </a> 
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse float-end position-relative sticky-top"
        id="navbarTogglerDemo02" 
        style={{ right: "0px"}}
      >
        <ul className="list d-flex flex-row float-end ms-auto">
          <li className="px-3" style={{ textDecoration: "none" }}>
            <a href="#about">About</a>
          </li>
          <li className="px-3" style={{ textDecoration: "none" }}>
            <a href="#project">Projects</a>
          </li>
          <li className="px-3" style={{ textDecoration: "none" }}>
            <a href="#interest">Interests</a>
          </li>
          <li className="px-3" style={{ textDecoration: "none" }}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import "../styles/Home.css";

// Import Lottie animations
import animation1 from "../assets/Animation1.json"; // Shoe Animation
import animation2 from "../assets/Animation2.json"; // Locker Animation
import animation5 from "../assets/Animation5.json"; // Dress Animation
import zipperAnimation from "../assets/Animation4.json"; // Zipper Animation

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">Style Files</h1>
        <div className="nav-buttons">
          <Link to="/signin" className="nav-button">
            Sign In
          </Link>
          <Link to="/signup" className="nav-button">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* First Section - SVG First, Text Second */}
      <section className="info-section">
        <div className="svg-container">
          <Lottie animationData={zipperAnimation} className="animation" />
        </div>
        <div className="text-container">
          <h2 className="ultra-text glowing-text">
            Your Digital Closet, Reimagined
          </h2>
          <p className="barlow-text glowing-text">
            Style Files lets you mix, match, and visualize your outfits like
            never before.
          </p>
        </div>
      </section>

      <div className="spacer"></div>

      {/* Second Section - Text First, SVG Second */}
      <section className="info-section reverse">
        <div className="text-container">
          <h2 className="ultra-text glowing-text">Try Before You Buy</h2>
          <p className="barlow-text glowing-text">
            See how clothes fit your virtual model before making a purchase.
          </p>
        </div>
        <div className="svg-container">
          <Lottie animationData={animation2} className="animation" />
        </div>
      </section>

      <div className="spacer"></div>

      {/* Third Section - SVG First, Text Second */}
      <section className="info-section">
        <div className="svg-container">
          <Lottie animationData={animation5} className="animation" />
        </div>
        <div className="text-container">
          <h2 className="ultra-text glowing-text">Every Style, Every Size</h2>
          <p className="barlow-text glowing-text">
            Style Files adjusts clothing sizes so you can find the perfect fit.
          </p>
        </div>
      </section>

      <div className="spacer"></div>

      {/* Fourth Section - Text First, SVG Second */}
      <section className="info-section reverse">
        <div className="text-container">
          <h2 className="ultra-text glowing-text">
            Your Personal Fashion Assistant
          </h2>
          <p className="barlow-text glowing-text">
            Save outfits, track your wardrobe, and experiment with new styles
            effortlessly.
          </p>
        </div>
        <div className="svg-container">
          <Lottie animationData={animation1} className="animation" />
        </div>
      </section>
    </div>
  );
};

export default Homepage;

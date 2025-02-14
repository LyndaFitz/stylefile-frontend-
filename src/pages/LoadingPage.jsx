import React from "react";
import "../styles/LoadingPage.css";
import Lottie from "lottie-react";
import animation5 from "../assets/Animation5.json"; // Girl changing dresses

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <Lottie animationData={animation5} className="loading-animation" />
      <h2 className="loading-text">Styling Your Files... 💖</h2>
    </div>
  );
};

export default LoadingPage;

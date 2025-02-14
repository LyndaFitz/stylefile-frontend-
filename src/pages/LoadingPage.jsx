import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import "../styles/LoadingPage.css"; // Ensure this file exists
import animation5 from "../assets/Animation5.json"; // Correct JSON import

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to fit prediction page after 7 seconds
    const timer = setTimeout(() => {
      navigate("/fit-prediction");
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <Lottie
        animationData={animation5}
        loop={true}
        className="loading-animation"
      />
      <h2 className="loading-text">Finding Your Perfect Fit...</h2>
    </div>
  );
};

export default LoadingPage;

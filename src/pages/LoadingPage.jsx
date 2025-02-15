import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/Animation3.json"; // ✅ Correct Animation
import "../styles/LoadingPage.css";

const LoadingPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar updates smoothly over 10 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    setTimeout(() => {
      navigate("/results");
    }, 10000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="loading-container">
      <h2>Finding Your Best Fit...</h2>
      <p className="loading-text">
        Analyzing measurements and clothing dimensions...
      </p>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <Lottie
        animationData={animationData}
        className="loading-animation"
        loop
        autoPlay
      />

      <p className="loading-note">
        This may take a moment. Hang tight while we generate your fit
        prediction!
      </p>
    </div>
  );
};

export default LoadingPage;

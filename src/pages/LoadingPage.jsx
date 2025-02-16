import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation3 from "../assets/Animation3.json"; // Clock Animation
import animation6 from "../assets/Animation6.json"; // Newton's Cradle Animation
import "../styles/LoadingPage.css";

const LoadingPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar updates smoothly over 20 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 200);

    setTimeout(() => {
      navigate("/results");
    }, 20000); // Now 20 seconds instead of 10

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="loading-container">
      {/* Clock Animation at the top */}
      <Lottie
        animationData={animation3}
        className="clock-animation"
        loop
        autoPlay
      />

      <h2>Finding Your Best Fit...</h2>
      <p className="loading-text">
        Analyzing measurements and clothing dimensions...
      </p>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Newton's Cradle Animation at the bottom */}
      <Lottie
        animationData={animation6}
        className="cradle-animation"
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

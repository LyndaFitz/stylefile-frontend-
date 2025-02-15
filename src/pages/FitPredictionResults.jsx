import React from "react";
import "../styles/FitPredictionResults.css";

const getConfidenceStars = (score) => {
  const stars = Math.round(score / 20);
  return "⭐".repeat(stars).padEnd(5, "⭐");
};

const FitPredictionResults = () => {
  const confidence = 85;

  return (
    <div className="fit-results-container">
      <h2>Fit Prediction Results</h2>

      <div className="confidence-section">
        <p className="confidence-text">Confidence Level:</p>
        <span className="stars">{getConfidenceStars(confidence)}</span>
      </div>

      <div className="results-details">
        <p>
          <strong>Recommendation:</strong> Based on your measurements and
          clothing dimensions, this item is expected to fit{" "}
          <strong>comfortably</strong> with slight flexibility.
        </p>
        <p>
          <strong>Size Suggestion:</strong> If you prefer a tighter fit,
          consider sizing down. If you prefer a looser fit, size up.
        </p>
        <p>
          <strong>Material Stretch:</strong> Ensure the fabric has some stretch
          for the best fit.
        </p>
      </div>
    </div>
  );
};

export default FitPredictionResults;

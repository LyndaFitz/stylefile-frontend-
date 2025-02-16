import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FitPredictionResults.css";

const FitPredictionResults = () => {
  const navigate = useNavigate();

  // Sample fit percentage (this would be dynamic)
  const fitScore = 85;

  // Fit breakdown text (would be generated based on actual data)
  const fitBreakdown = {
    waist: "The waist fits perfectly ✅",
    bust: "The bust is slightly snug ⚠️",
    hips: "The hips have a comfortable fit ✅",
    length: "The length is a little short but wearable ⚠️",
  };

  // Recommendation (could be generated based on fit score)
  const recommendation =
    fitScore > 80
      ? "This is a great fit! You’ll feel confident in this outfit."
      : "Consider trying a different size for a better fit.";

  return (
    <div className="results-container">
      <h2 className="results-title">Fit Prediction Results</h2>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${fitScore}%` }}></div>
      </div>
      <p className="fit-score">Fit Score: {fitScore}%</p>

      {/* Fit Breakdown */}
      <div className="fit-details">
        <p>{fitBreakdown.waist}</p>
        <p>{fitBreakdown.bust}</p>
        <p>{fitBreakdown.hips}</p>
        <p>{fitBreakdown.length}</p>
      </div>

      {/* Recommendation */}
      <p className="recommendation">{recommendation}</p>

      {/* Call to Action Buttons */}
      <div className="button-group">
        <button
          onClick={() => navigate("/fit-preferences")}
          className="adjust-btn"
        >
          Adjust Preferences
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="try-again-btn"
        >
          Try Another Fit
        </button>
      </div>
    </div>
  );
};

export default FitPredictionResults;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FitPredictionForm.css"; // Ensure this file styles the form

const FitPrediction = () => {
  // State for user measurements
  const [userHeight, setUserHeight] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [userBustSize, setUserBustSize] = useState("");

  // State for clothing dimensions
  const [clothingWaist, setClothingWaist] = useState("");
  const [clothingHips, setClothingHips] = useState("");
  const [clothingLength, setClothingLength] = useState("");

  // State for clothing preferences
  const [fitPreference, setFitPreference] = useState("");
  const [clothingType, setClothingType] = useState("");

  const navigate = useNavigate();

  // Improved Fit Prediction Logic
  const getFitPrediction = () => {
    if (
      !userHeight ||
      !userWeight ||
      !userBustSize ||
      !clothingWaist ||
      !clothingHips ||
      !clothingLength
    ) {
      return "⚠️ Please fill out all fields to get a fit prediction.";
    }

    let fitMessage = "✅ Just Right";

    const heightDiff = parseInt(userHeight) - parseInt(clothingLength);
    const waistDiff = parseInt(userWeight) - parseInt(clothingWaist);
    const bustDiff = parseInt(userBustSize) - parseInt(clothingHips);

    if (heightDiff > 3) {
      fitMessage = "⚠️ This item may be too short for you.";
    } else if (heightDiff < -3) {
      fitMessage = "⚠️ This item may be too long.";
    }

    if (waistDiff > 5) {
      fitMessage = "⚠️ The waist might be too tight.";
    } else if (waistDiff < -5) {
      fitMessage = "⚠️ The waist might be too loose.";
    }

    if (bustDiff > 4) {
      fitMessage = "⚠️ The bust might be too tight.";
    } else if (bustDiff < -4) {
      fitMessage = "⚠️ The bust might be too loose.";
    }

    return fitMessage;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fitResult = getFitPrediction();

    // Instead of an alert, show a styled message
    document.getElementById("fit-result").innerText = fitResult;
  };

  return (
    <div className="fit-prediction-container">
      <h2 style={{ color: "#FF1493" }}>Fit Prediction Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {/* User Measurements */}
        <h3>Your Measurements</h3>
        <label>Height (inches)</label>
        <input
          type="number"
          value={userHeight}
          onChange={(e) => setUserHeight(e.target.value)}
          required
          className="hotpink-input"
        />

        <label>Weight (lbs)</label>
        <input
          type="number"
          value={userWeight}
          onChange={(e) => setUserWeight(e.target.value)}
          required
          className="hotpink-input"
        />

        <label>Bust Size (inches)</label>
        <input
          type="number"
          value={userBustSize}
          onChange={(e) => setUserBustSize(e.target.value)}
          required
          className="hotpink-input"
        />

        {/* Clothing Dimensions */}
        <h3>Clothing Dimensions</h3>
        <label>Waist (inches)</label>
        <input
          type="number"
          value={clothingWaist}
          onChange={(e) => setClothingWaist(e.target.value)}
          required
          className="hotpink-input"
        />

        <label>Hips (inches)</label>
        <input
          type="number"
          value={clothingHips}
          onChange={(e) => setClothingHips(e.target.value)}
          required
          className="hotpink-input"
        />

        <label>Length (inches)</label>
        <input
          type="number"
          value={clothingLength}
          onChange={(e) => setClothingLength(e.target.value)}
          required
          className="hotpink-input"
        />

        {/* Clothing Preferences */}
        <h3>Clothing Preferences</h3>
        <label>Fit Preference</label>
        <select
          value={fitPreference}
          onChange={(e) => setFitPreference(e.target.value)}
          required
        >
          <option value="">Select Fit</option>
          <option value="tight">Tight</option>
          <option value="loose">Loose</option>
          <option value="justRight">Just Right</option>
        </select>

        <label>Clothing Type</label>
        <select
          value={clothingType}
          onChange={(e) => setClothingType(e.target.value)}
          required
        >
          <option value="">Select Clothing Type</option>
          <option value="dress">Dress</option>
          <option value="pants">Pants</option>
          <option value="shirt">Shirt</option>
        </select>

        <button
          type="submit"
          className="submit-button"
          style={{ backgroundColor: "#FF1493", color: "white" }}
        >
          Get Fit Prediction
        </button>

        {/* Fit Result Display */}
        <p
          id="fit-result"
          style={{ marginTop: "20px", fontWeight: "bold", color: "#FF1493" }}
        ></p>
      </form>
    </div>
  );
};

export default FitPrediction;

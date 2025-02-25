import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FitPrediction.css";

const FitPrediction = () => {
  const navigate = useNavigate();
  const [clothingData, setClothingData] = useState({
    waist: "",
    hips: "",
    length: "",
    sleeveLength: "",
    shoulderWidth: "",
    inseam: "",
  });

  const handleChange = (e) => {
    setClothingData({ ...clothingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/loading"); // ✅ Goes to Loading Page
  };

  return (
    <div className="fit-prediction-container">
      <h2>Enter Clothing Measurements</h2>
      <form onSubmit={handleSubmit}>
        <label>Waist (in inches)</label>
        <input
          type="number"
          name="waist"
          value={clothingData.waist}
          onChange={handleChange}
          required
        />

        <label>Hips (in inches)</label>
        <input
          type="number"
          name="hips"
          value={clothingData.hips}
          onChange={handleChange}
          required
        />

        <label>Length (in inches)</label>
        <input
          type="number"
          name="length"
          value={clothingData.length}
          onChange={handleChange}
          required
        />

        <label>Sleeve Length (in inches)</label>
        <input
          type="number"
          name="sleeveLength"
          value={clothingData.sleeveLength}
          onChange={handleChange}
        />

        <label>Shoulder Width (in inches)</label>
        <input
          type="number"
          name="shoulderWidth"
          value={clothingData.shoulderWidth}
          onChange={handleChange}
        />

        <label>
          Inseam (in inches) <span className="note">(For pants only)</span>
        </label>
        <input
          type="number"
          name="inseam"
          value={clothingData.inseam}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FitPrediction;

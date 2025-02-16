import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FitPreferences.css";

const FitPreferences = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    topFit: "",
    bottomFit: "",
    dressFit: "",
  });

  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Fit Preferences:", preferences);

    // ✅ Navigate to the Loading Page after submitting
    navigate("/loading");
  };

  return (
    <div className="fit-preferences-container">
      <h2>Choose Your Fit Preferences</h2>
      <form onSubmit={handleSubmit}>
        <label>How do you like your tops to fit?</label>
        <select
          name="topFit"
          value={preferences.topFit}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="tight">Tight</option>
          <option value="fitted">Fitted</option>
          <option value="relaxed">Relaxed</option>
          <option value="oversized">Oversized</option>
        </select>

        <label>How do you like your bottoms to fit?</label>
        <select
          name="bottomFit"
          value={preferences.bottomFit}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="skinny">Skinny</option>
          <option value="slim">Slim</option>
          <option value="regular">Regular</option>
          <option value="loose">Loose</option>
        </select>

        <label>How do you like your dresses to fit?</label>
        <select
          name="dressFit"
          value={preferences.dressFit}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="bodycon">Bodycon</option>
          <option value="fitted">Fitted</option>
          <option value="flowy">Flowy</option>
          <option value="oversized">Oversized</option>
        </select>

        <button type="submit" className="continue-btn">
          Continue
        </button>
      </form>
    </div>
  );
};

export default FitPreferences;

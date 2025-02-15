import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FitPreferences.css"; // ✅ Ensure the CSS file exists

const FitPreferences = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    fitType: "",
    looseness: "",
    preferredSize: "",
  });

  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/loading"); // ✅ Redirect to loading page
  };

  return (
    <div className="fit-preferences-container">
      <h2>Fit Preferences</h2>
      <form onSubmit={handleSubmit}>
        <label>How do you like your clothes to fit?</label>
        <select
          name="fitType"
          value={preferences.fitType}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="tight">Tight</option>
          <option value="regular">Regular</option>
          <option value="loose">Loose</option>
        </select>

        <label>Do you prefer a snug or roomy fit?</label>
        <select
          name="looseness"
          value={preferences.looseness}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="snug">Snug</option>
          <option value="roomy">Roomy</option>
        </select>

        <label>Do you usually size up or down?</label>
        <select
          name="preferredSize"
          value={preferences.preferredSize}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="size-up">I size up</option>
          <option value="size-down">I size down</option>
          <option value="true-size">I wear my true size</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FitPreferences;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserDetailsForm.css"; // Make sure you create this CSS file

const UserDetailsForm = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bustSize, setBustSize] = useState("");
  const [cupSize, setCupSize] = useState("");
  const [braSize, setBraSize] = useState("");

  const navigate = useNavigate(); // Navigation hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user details (this can be stored in a database later)
    console.log("User details submitted:", {
      height,
      weight,
      bustSize,
      cupSize,
      braSize,
    });

    navigate("/dashboard"); // Redirect to the Dashboard after submitting details
  };

  return (
    <div className="form-container">
      <h2>Tell Us About You!</h2>
      <form onSubmit={handleSubmit}>
        <label>Height (inches)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />

        <label>Weight (lbs)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />

        <label>Bust Size (inches)</label>
        <input
          type="number"
          value={bustSize}
          onChange={(e) => setBustSize(e.target.value)}
          required
        />

        <label>Cup Size</label>
        <input
          type="text"
          value={cupSize}
          onChange={(e) => setCupSize(e.target.value)}
          required
        />

        <label>Bra Size</label>
        <input
          type="text"
          value={braSize}
          onChange={(e) => setBraSize(e.target.value)}
          required
        />

        <button type="submit" className="submit-button">
          Continue
        </button>
      </form>
    </div>
  );
};

export default UserDetailsForm;

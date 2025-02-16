import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ClothingDimensions.css";

const ClothingDimensions = () => {
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
    navigate("/fit-preferences");
  };

  return (
    <div className="clothing-dimensions-container">
      {/* Measurement Guide */}
      <div className="measurement-guide">
        <h3>Measurement Guide</h3>
        <ul>
          <li>
            <strong>Waist:</strong> Measure around the narrowest part of your
            torso.
          </li>
          <li>
            <strong>Hips:</strong> Measure around the widest part of your hips.
          </li>
          <li>
            <strong>Length:</strong> Measure from the top to the bottom of the
            garment.
          </li>
          <li>
            <strong>Sleeve Length:</strong> Measure from shoulder to wrist.
          </li>
          <li>
            <strong>Shoulder Width:</strong> Measure from shoulder to shoulder.
          </li>
          <li>
            <strong>Inseam:</strong> (For pants) Measure from crotch to hem.
          </li>
        </ul>
      </div>

      {/* Form for inputting clothing dimensions */}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Waist (in inches)</label>
          <input
            type="number"
            name="waist"
            value={clothingData.waist}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-container">
          <label>Hips (in inches)</label>
          <input
            type="number"
            name="hips"
            value={clothingData.hips}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-container">
          <label>Length (in inches)</label>
          <input
            type="number"
            name="length"
            value={clothingData.length}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-container">
          <label>Sleeve Length (in inches)</label>
          <input
            type="number"
            name="sleeveLength"
            value={clothingData.sleeveLength}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label>Shoulder Width (in inches)</label>
          <input
            type="number"
            name="shoulderWidth"
            value={clothingData.shoulderWidth}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label>
            Inseam (in inches) <span className="note">(For pants only)</span>
          </label>
          <input
            type="number"
            name="inseam"
            value={clothingData.inseam}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default ClothingDimensions;

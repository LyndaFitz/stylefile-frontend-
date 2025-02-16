import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard!</h2>
      <p>You are successfully logged in.</p>

      <button
        className="start-fit-btn"
        onClick={() => navigate("/user-details")} // ✅ Now redirects correctly
      >
        Start Fit Prediction
      </button>
    </div>
  );
};

export default Dashboard;

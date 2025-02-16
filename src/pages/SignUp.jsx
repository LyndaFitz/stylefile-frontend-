import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation7 from "../assets/Animation7.json";
import "../styles/SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("⚡ Attempting sign-up...");
    console.log("✅ User signed up with:");
    console.log("Username:", username);
    console.log("Password:", password);

    navigate("/dashboard"); // Redirect to Dashboard after sign-up
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h2 className="title">Create Your Account</h2>
        <div className="user-icon">
          <Lottie animationData={animation7} className="animation-svg" />
        </div>
      </div>

      <div className="form-wrapper">
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="signup-button">
            Sign Up
          </button>

          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

      <p className="signin-link">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation7 from "../assets/Animation7.json";
import "../styles/SignIn.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("⚡ Attempting sign-in...");
    console.log("✅ User signed in with:");
    console.log("Username:", username);
    console.log("Password:", password);

    navigate("/dashboard"); // Redirect to Dashboard after login
  };

  return (
    <div className="signin-container">
      <div className="signin-header">
        <h2 className="welcome-text">Welcome Back!</h2>
        <div className="user-icon">
          <Lottie animationData={animation7} className="animation-svg" />
        </div>
      </div>

      <div className="form-wrapper">
        <form className="signin-form" onSubmit={handleSubmit}>
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="signin-button">
            Sign In
          </button>

          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

      <p className="signin-link">
        New to Style Files? <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
};

export default SignIn;

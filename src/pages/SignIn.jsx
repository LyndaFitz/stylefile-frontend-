import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

    // Navigate to the user details page
    navigate("/user-details");
  };

  return (
    <div className="signin-container">
      <h2 className="title">Welcome Back!</h2>

      <form className="signin-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
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

      <p className="signup-link">
        New to Style Files? <a href="/signup">Create an account</a>
      </p>
    </div>
  );
};

export default SignIn;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up-page">
      <h2>Sign Up</h2>
      <form>
        <label>Username:</label>
        <input type="text" placeholder="Enter your username" required />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password:</label>
        <input type="password" placeholder="Create a password" required />

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;

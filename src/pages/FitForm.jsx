// SignIn.jsx example
import React, { useState } from "react";
import { auth } from "../firebase-config"; // Import auth from the config
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // Sign in the user
      navigate("/fit-form"); // Redirect to the fit form page after success
    } catch (error) {
      console.error("Error signing in: ", error.message); // Handle any errors
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; // Importing signIn method from Firebase
import { auth } from "../FirebaseConfig"; // Import the auth object from the firebase config

const SignIn = () => {
  // State to hold email, password, and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      // Use the Firebase signInWithEmailAndPassword method
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCredential.user); // This logs the authenticated user
      // You can redirect the user after login here if needed (using `useNavigate()` for example)
    } catch (err) {
      setError(err.message); // If error occurs, set error message
      console.error("Error during sign-in:", err.message);
    }
  };

  return (
    <div className="signin-container">
      <h2>Welcome Back!</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Sign In</button>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error message if any */}
      </form>
      <p>
        New to Style Files? <a href="/signup">Create an account</a>
      </p>
    </div>
  );
};

export default SignIn;

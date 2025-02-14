import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage"; // Homepage
import SignIn from "./pages/SignIn"; // Sign In Page
import SignUp from "./pages/SignUp"; // Sign Up Page
import UserDetailsForm from "./pages/UserDetailsForm"; // NEW: User Details Form
import Dashboard from "./pages/Dashboard"; // NEW: Dashboard Page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user-details" element={<UserDetailsForm />} />{" "}
        {/* NEW: User Details Form Route */}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* NEW: Dashboard Route */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage"; // Homepage
import SignIn from "./pages/SignIn"; // Sign In Page
import SignUp from "./pages/SignUp"; // Sign Up Page
import UserDetailsForm from "./pages/UserDetailsForm"; // User Details Form
import Dashboard from "./pages/Dashboard"; // Dashboard Page
import LoadingPage from "./pages/LoadingPage"; // Loading Page
import FitPrediction from "./pages/FitPrediction"; // FIXED: Correct Import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user-details" element={<UserDetailsForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/fit-prediction" element={<FitPrediction />} />{" "}
        {/* FIXED */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;

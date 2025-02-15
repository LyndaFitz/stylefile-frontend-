import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserDetailsForm from "./pages/UserDetailsForm";
import Dashboard from "./pages/Dashboard";
import FitPrediction from "./pages/FitPrediction";
import ClothingDimensions from "./pages/ClothingDimensions";
import FitPreferences from "./pages/FitPreferences";
import LoadingPage from "./pages/LoadingPage";
import FitPredictionResults from "./pages/FitPredictionResults";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user-details" element={<UserDetailsForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fit-prediction" element={<FitPrediction />} />
        <Route path="/clothing-dimensions" element={<ClothingDimensions />} />
        <Route path="/fit-preferences" element={<FitPreferences />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/results" element={<FitPredictionResults />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;

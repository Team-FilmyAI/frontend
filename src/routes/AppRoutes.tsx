import { Routes, Route } from "react-router-dom";
import React, { useState } from "react"; 
import HeroPage from "../pages/HeroPage/HeroPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ViewOpportunities from "../pages/ViewOpportunities/ViewOpportunities";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Forgot" element={<ForgotPassword />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/ViewOpportunities" element={<ViewOpportunities />} />
    </Routes>
  );
}

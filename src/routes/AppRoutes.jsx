import { Routes, Route } from "react-router-dom";
import HeroPage from "../pages/HeroPage/HeroPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword" 
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import LandingPage from "../pages/LandingPage/LandingPage";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Forgot" element={<ForgotPassword />} />
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

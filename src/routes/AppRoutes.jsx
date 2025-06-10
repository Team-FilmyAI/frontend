import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Login from "../pages/LoginSignUp/Login";
import SignUp from "../pages/LoginSignUp/SignUp";
import Forgot from "../pages/LoginSignUp/Forgot";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Forgot" element={<Forgot />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

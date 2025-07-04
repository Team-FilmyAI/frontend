import { Routes, Route } from "react-router-dom";
import HeroPage from "../pages/HeroPage/HeroPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword" 
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import FilmProjectDetails from "../pages/FilmProjectDetails/FilmProjectDetails";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Forgot" element={<ForgotPassword />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/FilmDetails" element={<FilmProjectDetails />} />
      {/* Will remove /FilmDetails from AppRoutes and connect it to Landing page once it's complete */}
    </Routes>
  );
}

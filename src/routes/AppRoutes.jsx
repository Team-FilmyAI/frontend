import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Login from "../pages/LoginSignUp/Login";
import SignUp from "../pages/LoginSignUp/SignUp";
import Forgot from "../pages/LoginSignUp/Forgot";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Header from "../shared/components/Header";
import SearchBar from "../shared/components/SearchBar";
import Opportunities from "../shared/components/Opportunities";
import CastingCards from "../shared/components/CastingCards";
import TextInput from "../shared/components/Text Input/TextInput";
import Button from "../shared/components/Button/Button";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Forgot" element={<Forgot />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/header" element={<Header />} />
      <Route path="/searchbar" element={<SearchBar />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/castingcards" element={<CastingCards />} />
      <Route path="/textinput" element={<TextInput />} />
      <Route path="/button" element={<Button />} />
    </Routes>
  );
}

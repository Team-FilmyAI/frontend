import { Routes, Route } from "react-router-dom";
import HeroPage from "../pages/HeroPage/HeroPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword" 
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import ViewOpportunities from "../pages/ViewOpportunities/ViewOpportunities";
import ButtonGroup from "../pages/ButtonGroup";
import TextInputGroup from "../pages/TextInputGroup";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Forgot" element={<ForgotPassword />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/SearchBar" element={<SearchBar />} />
      <Route path="/ViewOpportunities" element={<ViewOpportunities />}/>
      <Route path="/ButtonGroup" element={<ButtonGroup />} />
      <Route path="/TextInputGroup" element={<TextInputGroup />} />
      
    </Routes>
  );
}

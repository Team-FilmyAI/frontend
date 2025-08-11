import { Route, Routes } from 'react-router-dom';
import CurrentProjectDetails from '../pages/CurrentProjectDetails/CurrentProjectDetails';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import HeroPage from '../pages/HeroPage/HeroPage';
import Login from '../pages/Login/Login';
import ProductionDashboard from '../pages/ProductionDashboard/ProductionDashboard';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import SignUp from '../pages/SignUp/SignUp';
import FilmProjectDetails from './../pages/FilmProjectDetails/FilmProjectDetails';
import LandingPage from '../pages/LandingPage/LandingPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Forgot" element={<ForgotPassword />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/FilmDetails" element={<FilmProjectDetails />} />
      <Route path="/ProductionDashboard" element={<ProductionDashboard />} />
      <Route path="/CurrentProjectDetails" element={<CurrentProjectDetails />} />
      <Route path="/LandingPage" element={<LandingPage />} />
    </Routes>
  );
}
